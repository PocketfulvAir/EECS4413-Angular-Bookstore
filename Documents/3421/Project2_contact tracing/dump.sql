--
-- PostgreSQL database dump
--

-- Dumped from database version 11.9
-- Dumped by pg_dump version 11.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: action; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.action (
    action character varying(20) NOT NULL
);


--
-- Name: method; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.method (
    method character varying(50) NOT NULL
);


--
-- Name: offer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.offer (
    testtype character varying(30) NOT NULL,
    testcentre character varying(30) NOT NULL
);


--
-- Name: person; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.person (
    name character varying(20),
    address character varying(50),
    phone bigint NOT NULL,
    sin bigint NOT NULL
);


--
-- Name: place; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.place (
    name character varying(50) NOT NULL,
    gps character varying(20),
    description character varying(70),
    address character varying(70) NOT NULL
);


--
-- Name: recon; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.recon (
    sin bigint NOT NULL,
    method character varying(50) NOT NULL,
    placename character varying(50) NOT NULL,
    "time" character varying(50) NOT NULL
);


--
-- Name: test; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test (
    sin bigint NOT NULL,
    "time" character varying(30) NOT NULL,
    testcentre character varying(30) NOT NULL,
    testtype character varying(30) NOT NULL,
    action character varying(30) NOT NULL
);


--
-- Name: test_centre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test_centre (
    testcentre character varying(30) NOT NULL
);


--
-- Name: test_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test_type (
    testtype character varying(50) NOT NULL
);


--
-- Name: time_slot; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.time_slot (
    "time" character varying(50) NOT NULL
);


--
-- Data for Name: action; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.action (action) FROM stdin;
quarantine
oxygen chamber
prescibed medicine
chemotherapy
cardio
rest
optometrist visit
ent specialist vist
gym work
\.


--
-- Data for Name: method; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.method (method) FROM stdin;
contact-tracing phone app
surveillance camera
registry sign in
registry sign out
\.


--
-- Data for Name: offer; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.offer (testtype, testcentre) FROM stdin;
\.


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.person (name, address, phone, sin) FROM stdin;
Chris Cuomo	129 Bloor Ave,Toronto	4167861900	341412411
Van Jones	144 Nugget Ave, Toronto	6478617911	341412422
James Roger	123 Nugget Ave, Toronto	6478413511	341412433
Andrew Ford	131 Yonge St, Toronto	2313314411	341412444
Mary Lynch	144 spadina Ave, Toronto	4162341000	341412455
Jane Harris	11 Yonge St, Toronto	4163349000	341412466
john trump	12 abc street	123456789	123456789
alex cook	13 def street	423653312	234567890
jimmy shergil 	1313 hij street	234456232	345678901
charles cox	11 klm street	673452321	456789012
anderson poli	12nop street	547623412	567890123
\.


--
-- Data for Name: place; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.place (name, gps, description, address) FROM stdin;
HealthOne clinic	21.22.12	clinic	13 yonge ave, Toronto
Yonge&Bloor Station	11.11.11	Train station	10 yonge ave, Toronto
Tongs clinic	11.12.13	clinic	112 yonge ave, Toronto
Joys clinic	12.1.1	clinic	115 yonge ave, Toronto
Starbucks Davisville	11.12.13	cafe	100 yonge ave, Toronto
mcw	14.121.113	cafe	122 yonge ave, Toronto
CIBC eglington	111.121.113	Bank	117 yonge ave, Toronto
Best buy	11.10.3	Retail	119 yonge ave, Toronto
Sportcheck	12.11.14	Retail	120 yonge ave, Toronto
Yonge&Mills Station	101.101.101	Train station	125 yonge ave, Toronto
Shaonons clinic	13.13.13	clinic	126 yonge ave, Toronto
JackAstors	14.114.13	cafe	127 yonge ave, Toronto
mcDonalds	14.121.113	cafe	122 yonge ave, Toronto
Tim hortons	111.112.113	cafe	133 yonge ave, Toronto
HealthOne test centre	22.11.11	clicic	14 yonge ave,Toronto
\.


--
-- Data for Name: recon; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.recon (sin, method, placename, "time") FROM stdin;
341412444	contact-tracing phone app	mcw	6:00pm 25 September 2020
234567890	registry sign in	Yonge&Bloor Station	6:00pm 25 September 2020
345678901	registry sign in	Tim hortons	6:00pm 25 September 2020
456789012	contact-tracing phone app	Tongs clinic	6:00pm 25 September 2020
345678901	registry sign out	Starbucks Davisville	6:00pm 25 September 2020
123456789	surveillance camera	Starbucks Davisville	3:00pm 25 September 2020
234567890	contact-tracing phone app	Yonge&Mills Station	3:00pm 25 September 2020
345678901	surveillance camera	mcDonalds	3:00pm 25 September 2020
456789012	contact-tracing phone app	Yonge&Mills Station	3:00pm 25 September 2020
567890123	surveillance camera	HealthOne clinic	3:00pm 25 September 2020
567890123	registry sign in	mcw	6:00pm 25 September 2020
234567890	contact-tracing phone app	mcw	6:00pm 25 September 2020
345678901	surveillance camera	JackAstors	6:00pm 25 September 2020
567890123	registry sign out	Shaonons clinic	6:00pm 25 September 2020
567890123	surveillance camera	Best buy	6:00pm 25 September 2020
341412455	registry sign in	Sportcheck	9:00pm 25 September 2020
234567890	surveillance camera	Starbucks Davisville	9:00pm 25 September 2020
567890123	registry sign in	CIBC eglington	9:00pm 25 September 2020
341412466	registry sign out	HealthOne test centre	9:00pm 25 September 2020
567890123	registry sign out	Joys clinic	9:00pm 25 September 2020
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.test (sin, "time", testcentre, testtype, action) FROM stdin;
341412411	3:00pm 25 September 2020	Tongs clinic	covid test	quarantine
341412455	3:00pm 25 September 2020	Joys clinic	diagnosis	prescibed medicine
341412422	3:00pm 25 September 2020	Joys clinic	cancer test	chemotherapy
341412433	3:00pm 25 September 2020	HealthOne test centre	heart test	cardio
341412444	3:00pm 25 September 2020	HealthOne test centre	eye test	optometrist visit
341412466	6:00pm 25 September 2020	Shaonons clinic	physio	gym work
\.


--
-- Data for Name: test_centre; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.test_centre (testcentre) FROM stdin;
HealthOne test centre
Tongs clinic
Joys clinic
Shaonons clinic
\.


--
-- Data for Name: test_type; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.test_type (testtype) FROM stdin;
covid test
breathe test
diagnosis
cancer test
heart test
body test
eye test
ear test
physio
\.


--
-- Data for Name: time_slot; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.time_slot ("time") FROM stdin;
3:00pm 25 September 2020
6:00pm 25 September 2020
9:00pm 25 September 2020
\.


--
-- Name: method methodpk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.method
    ADD CONSTRAINT methodpk PRIMARY KEY (method);


--
-- Name: offer offer_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.offer
    ADD CONSTRAINT offer_pkey PRIMARY KEY (testtype, testcentre);


--
-- Name: person person_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pk PRIMARY KEY (sin);


--
-- Name: place placepk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.place
    ADD CONSTRAINT placepk PRIMARY KEY (name);


--
-- Name: recon recon_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recon
    ADD CONSTRAINT recon_pkey PRIMARY KEY (sin, method, placename, "time");


--
-- Name: test_centre test_centre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_centre
    ADD CONSTRAINT test_centre_pkey PRIMARY KEY (testcentre);


--
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (sin, "time", testcentre, testtype, action);


--
-- Name: test_type test_typepk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_type
    ADD CONSTRAINT test_typepk PRIMARY KEY (testtype);


--
-- Name: offer fkoffertestcentre; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.offer
    ADD CONSTRAINT fkoffertestcentre FOREIGN KEY (testcentre) REFERENCES public.test_centre(testcentre);


--
-- Name: offer fkoffertesttype; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.offer
    ADD CONSTRAINT fkoffertesttype FOREIGN KEY (testtype) REFERENCES public.test_type(testtype);


--
-- Name: recon fkrecon127681; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recon
    ADD CONSTRAINT fkrecon127681 FOREIGN KEY (method) REFERENCES public.method(method);


--
-- Name: recon fkrecon574005; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recon
    ADD CONSTRAINT fkrecon574005 FOREIGN KEY (sin) REFERENCES public.person(sin);


--
-- Name: recon fkrecon724098; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recon
    ADD CONSTRAINT fkrecon724098 FOREIGN KEY (placename) REFERENCES public.place(name);


--
-- Name: test_centre test_centerfk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_centre
    ADD CONSTRAINT test_centerfk FOREIGN KEY (testcentre) REFERENCES public.place(name);


--
-- Name: test testfk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT testfk1 FOREIGN KEY (sin) REFERENCES public.person(sin);


--
-- Name: test testfk4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT testfk4 FOREIGN KEY (testtype) REFERENCES public.test_type(testtype);


--
-- PostgreSQL database dump complete
--

