SET schema LSG37700;

drop table book ; 
drop table po ;
drop table category ;
drop table webuser ;
drop table pi ;
drop table review;

create table category(
  cname varchar(30) not null,
  primary key(cname)
);

create table book(
  bid varchar(20) not null,
  title varchar(100) not null,
  author varchar(100) not null,
  price decimal not null,
  category varchar(50) not null,
  imgUrl varchar(255) not null,
  primary key(bid),
  foreign key (category) references category(cname) on delete cascade
);

create table review (
  bid varchar(20) not null,
  review varchar(500) not null,
  primary key(bid, review)
);

create table po(
  oid int not null,
  username varchar(50) not null,
  date varchar(100) not null,
  status varchar(50) not null,
  price decimal not null,
  primary key(oid)
);

create table pi (
  oid int not null,
  bid varchar(20) not null,
  qty int not null,
  price decimal not null,
  primary key(oid, bid)
);

create table webuser (
  username varchar(100) not null,
  password varchar(100) not null,
  email varchar(100) not null,
  type varchar(20) not null,
  billing varchar(255),
  mailing varchar(255),
  primary key(username)
);

insert into category values 
('Biography'),
('Horror'),
('Fantasy'),
('Adventure'),
('Romance'),
('Mystery')
;

insert into book(bid, title, author, price, category, imgUrl) values
('9781524763169', 'A Promised Land', 'Barack Obama', '19.99', 'Biography', '24763169.jpg'),
('9781524763138', 'Becoming', 'Michelle Obama', '19.99', 'Biography', '24763138.jpg'),
('9781451648539', 'Steve Jobs', 'Walter lsaacson', '19.99', 'Biography', '51648539.jpg'),
('9780593139134', 'Greenlights', 'Matthew McConaughey', '25.99', 'Biography', '93139134.jpg'),
('9780735219090', 'Where the Crawdads Sing', 'Delia Owens', '10.49', 'Mystery', '35219090.jpg'),
('9781250301697', 'The Silent Patient', 'Alex Michaelides', '10.40', 'Mystery', '50301697.jpg'),
('9780316485623', 'The Law of Innocence', 'Michael Connelly', '15.60', 'Mystery', '16485623.jpg'),
('9781987633629', 'The Sentinel', 'Lee Child', '10.99', 'Mystery', '87633629.jpg'),
('9780440212560', 'Outlander', 'Diana Gabaldon', '22.99', 'Romance', '40212560.jpg'),
('9780062439598', 'The Hating Game: A Novel', 'Sally Throne', '19.99', 'Romance', '62439598.jpg'),
('9780544003415', 'The Lord of the Rings', 'J. R. R. Tolkien', '30.99', 'Fantasy', '44003415.jpg'),
('9780547928227', 'The Hobbit', 'J. R. R. Tolkien', '27.99', 'Fantasy', '47928227.jpg'),
('9784909069030', 'Treasure Island', 'Rovert Stevenson', '19.99', 'Adventure', '09069030.jpg'),
('9781503292383', 'Robinson Crusoe', 'Daniel Defoe', '14.99', 'Adventure', '03292383.jpg'),
('9780385545969', 'A Time for Mercy', 'John Grisham', '20.60', 'Horror', '61431156.jpg'),
('9780316015844', 'Twilight', 'Stephenie Meyer', '25.99', 'Horror', '16015844.jpg'),
('9781503261389', 'Dracula', 'Bram Stoker', '25.99', 'Horror', '03261389.jpg')
;

insert into webuser(username, password, email, type, billing, mailing) values
('user', 'user', 'u@mail.com', 'user', '123 user dr', '123 user dr'),
('admin', 'admin', 'admin@mail.com', 'admin', '123 admin dr', '123 admin dr')
;
