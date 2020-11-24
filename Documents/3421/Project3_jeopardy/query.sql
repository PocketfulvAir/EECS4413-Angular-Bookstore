-- query 1 myself, more like substring 
select* from player where lower(name) like '%' || lower(login) || '%'             
order by login asc;


-- query 2, golden,  
select distinct x.day, x.realm, x.theme
from quest x, loot r
where 
	x.theme = r.theme and x.realm = r.realm and x.day = r.day and r.treasure like '%Gold%' and r.login is not null
order by day, realm, theme;


-- query 3, evening 
select x.theme, x.day, x.realm, x.succeeded
from quest x
where
	succeeded > cast('20:00:00' as time) or succeeded is null
order by  theme, day, realm;


-- query 4, cheat
-- finish this 
select x.theme, x.realm, x.day, p.name, p.login
from quest x, player p
where
    p.name = 
order by login, name, day, realm, theme;


-- query 5 , bend  [modify this]
with
  helper (login, total) as (
    select p.login, count(a.name)
    from player p, avatar a
    where 
      p.login = a.login 
    group by p.login
  )

select P.login, p.name, p.gender, h.total as avatar
from player p, avatar a, helper h
where 
	p.login = a.login and p.login = h.login and p.gender <> a.gender
group by p.login, p.gender, p.name, h.total
order by p.login;


-- query 6, success
(select distinct theme from quest) except (select distinct theme from quest where succeeded is null)
order by theme;



-- query 7, https://github.com/vladstefanovich/eecs3421/blob/master/Project3/frequency.txt



-- query 8, race


-- query 9, companions https://github.com/vladstefanovich/eecs3421/blob/master/Project3/companions.txt
-- https://github.com/aderrico95/EECS3421/blob/master/Project%202/companions 

-- query 10, high

