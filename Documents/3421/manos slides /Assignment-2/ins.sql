INSERT INTO country values
  (1, 'Canada', 10, 36),
  (2, 'USA', 8, 325),
  (3, 'Italy', 5, 60),
  (4, 'France', 12, 67),
  (5, 'India', 1, 134),
  (6, 'Bangladesh', 5, 156),
  (7, 'Germany', 3, 82),
  (8, 'China', 6, 140),
  (9, 'Japan', 2, 127),
  (10, 'Russia', 5, 146),
  (11, 'Brazil', 7, 208),
  (12, 'Pakistan', 4, 193),
  (13, 'Australia', 0, 24),
  (14, 'United Kingdom', 14, 65),
  (15, 'Venezuela', 9, 4);

INSERT INTO neighbour values
    (1, 2, 30),   --canada and us
    (3,4, 20),    --Italy and france
    (4,7, 16),    --Germany and france
    (5, 6, 12),   --India and Bangladesh
    (8, 5, 11),    --India and China
    (10, 8, 19),   --Russia and China
    (12, 5, 20),  --India and Pakistan
    (11, 15, 1);    --Brazil and Venezuela

INSERT INTO ocean values
        (1, 'Atlantic', 50),
        (2, 'Arctic', 20),
        (3, 'Pacific', 60),
        (4, 'Indian', 25);

INSERT INTO oceanAccess values
    (1, 1),         --canada and Atlantic
    (1, 3),         --canada and Pacific
    (2, 1),         --USA and Atlantic
    (2, 3),         --USA and Pacific
    (13, 4),        --Austrailia and Indian oc
    (13, 3),        --Austrailia and Pacific
    (5, 4),         -- India and Indian oc
    (10, 2);        -- Russia nd Arctic
    (11, 1);        --Brazil and Atlantic

INSERT INTO hdi values
        (1, 2009, 0.9),
        (1, 2010, 0.85),
        (1, 2011, 0.88),
        (1, 2012, 0.91),
        (1, 2013, 0.92),
        (2, 2009, 0.92),
        (2, 2010, 0.92),
        (2, 2011, 0.9),
        (2, 2012, 0.91),
        (2, 2013, 0.94),
        (3, 2009, 0.56),
        (3, 2010, 0.55),
        (3, 2011, 0.58),
        (3, 2012, 0.55),
        (3, 2013, 0.57),
        (4, 2009, 0.76),
        (4, 2010, 0.77),
        (4, 2011, 0.78),
        (4, 2012, 0.79),
        (4, 2013, 0.80),
        (5, 2009, 0.43),
        (5, 2010, 0.44),
        (5, 2011, 0.45),
        (5, 2012, 0.46),
        (5, 2013, 0.47),
        (5, 1994, 0.95),
        (6, 2009, 0.14),
        (6, 2010, 0.15),
        (6, 2011, 0.19),
        (6, 2012, 0.20),
        (6, 2013, 0.21),
        (7, 2009, 0.21),
        (7, 2010, 0.21),
        (7, 2011, 0.21),
        (7, 2012, 0.21),
        (7, 2013, 0.21),
        (8, 2009, 0.7),
        (8, 2010, 0.77),
        (8, 2011, 0.78),
        (8, 2012, 0.8),
        (8, 2013, 0.81),
        (9, 2009, 0.61),
        (9, 2010, 0.68),
        (9, 2011, 0.67),
        (9, 2012, 0.65),
        (9, 2013, 0.67),
        (10, 2009, 0.40),
        (10, 2010, 0.39),
        (10, 2011, 0.39),
        (10, 2012, 0.38),
        (10, 2013, 0.39),
        (11, 2009, 0.70),
        (11, 2010, 0.70),
        (11, 2011, 0.71),
        (11, 2012, 0.71),
        (11, 2013, 0.71),
        (12, 2009, 0.40),
        (12, 2010, 0.41),
        (12, 2011, 0.43),
        (12, 2012, 0.44),
        (12, 2013, 0.45),
        (13, 2009, 0.60),
        (13, 2010, 0.61),
        (13, 2011, 0.68),
        (13, 2012, 0.69),
        (13, 2013, 0.69),
        (14, 2009, 0.70),
        (14, 2010, 0.72),
        (14, 2011, 0.73),
        (14, 2012, 0.73),
        (14, 2013, 0.75),
        (15, 2009, 0.40),
        (15, 2010, 0.35),
        (15, 2011, 0.30),
        (15, 2012, 0.25),
        (15, 2013, 0.22);

INSERT INTO religion values
        (1, 1, 'Christian', 0.70),
        (1, 2, 'Islam', 0.20),
        (1, 3, 'Hindu', 0.05),
        (1, 4, 'Jewish', 0.05),
        (2, 1, 'Christian', 0.90),
        (2, 2, 'Islam', 0.06),
        (2, 3, 'Hindu', 0.03),
        (2, 4, 'Jewish', 0.01),
        (3, 1, 'Christian', 0.99),
        (3, 2, 'Islam', 0.01);

INSERT INTO language values
        (1, 1, 'English', 0.90),   --canada
        (1, 2, 'French', 0.10),
        (2, 1, 'English', 0.85),   --usa
        (2, 3, 'Spanish', 0.15),
        (3, 4, 'Italian', 1.00),    -- Italy
        (4, 2,  'French', 1.00),   --france
        (5, 6, 'Hindi', 0.70),    --India
        (5, 7, 'Bengali', 0.02),
        (6, 7, 'Bengali', 0.99),  --Bangladesh
        (7, 8, 'German', 1.00),   --Germany
        (8, 9, 'Mandarin', 0.90), --China
      	(9, 10,'Japanese', 1.00), --Japan
        (10, 11,'Russian', 1.00),  --Russia
        (11, 12, 'Portugese', 1.00),  --Brazil
        (12, 12, 'Urdu', 0.90),    --Pakistan
        (13, 1, 'English',1.00 ),      --Austrailia
        (14, 1, 'English', 1.00),   --uk
        (15, 3, 'Spanish', 1.00);   --Venezuela
