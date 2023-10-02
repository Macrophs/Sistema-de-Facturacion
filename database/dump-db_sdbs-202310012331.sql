--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-01 23:31:49

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

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 24621)
-- Name: Client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Client" (
    id_client integer NOT NULL,
    name text NOT NULL,
    last_name text NOT NULL,
    cedula character varying NOT NULL,
    email text NOT NULL,
    phone character varying NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Client" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24653)
-- Name: Invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice" (
    id_invoice integer NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Invoice" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 24691)
-- Name: Invoice-Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice-Product" (
    id_invoice integer NOT NULL,
    id_product integer NOT NULL
);


ALTER TABLE public."Invoice-Product" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 24689)
-- Name: Invoice-Product_id_invoice_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Invoice-Product_id_invoice_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Invoice-Product_id_invoice_seq" OWNER TO postgres;

--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 228
-- Name: Invoice-Product_id_invoice_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Invoice-Product_id_invoice_seq" OWNED BY public."Invoice-Product".id_invoice;


--
-- TOC entry 229 (class 1259 OID 24690)
-- Name: Invoice-Product_id_product_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Invoice-Product_id_product_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Invoice-Product_id_product_seq" OWNER TO postgres;

--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 229
-- Name: Invoice-Product_id_product_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Invoice-Product_id_product_seq" OWNED BY public."Invoice-Product".id_product;


--
-- TOC entry 226 (class 1259 OID 24666)
-- Name: Payment_Method; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payment_Method" (
    id_payment_method integer NOT NULL,
    name text NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Payment_Method" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24633)
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id_product integer NOT NULL,
    name text NOT NULL,
    price real NOT NULL,
    quantity integer DEFAULT 0 NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24601)
-- Name: Rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rol" (
    id_rol integer NOT NULL,
    name text NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Rol" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24582)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    name text NOT NULL,
    last_name text,
    cedula character varying NOT NULL,
    id_user integer NOT NULL,
    email text NOT NULL,
    phone character varying NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT true NOT NULL,
    id_rol integer NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 24676)
-- Name: User_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_rol_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_rol_seq" OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 227
-- Name: User_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_rol_seq" OWNED BY public."User".id_rol;


--
-- TOC entry 216 (class 1259 OID 24589)
-- Name: User_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_user_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_user_seq" OWNER TO postgres;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 216
-- Name: User_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_user_seq" OWNED BY public."User".id_user;


--
-- TOC entry 219 (class 1259 OID 24620)
-- Name: client_id_client_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_client_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.client_id_client_seq OWNER TO postgres;

--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 219
-- Name: client_id_client_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_client_seq OWNED BY public."Client".id_client;


--
-- TOC entry 223 (class 1259 OID 24652)
-- Name: invoice_id_invoice_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invoice_id_invoice_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.invoice_id_invoice_seq OWNER TO postgres;

--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoice_id_invoice_seq OWNED BY public."Invoice".id_invoice;


--
-- TOC entry 225 (class 1259 OID 24665)
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_method_id_payment_method_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payment_method_id_payment_method_seq OWNER TO postgres;

--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 225
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_method_id_payment_method_seq OWNED BY public."Payment_Method".id_payment_method;


--
-- TOC entry 221 (class 1259 OID 24632)
-- Name: product_id_product_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_product_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_product_seq OWNER TO postgres;

--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_product_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_product_seq OWNED BY public."Product".id_product;


--
-- TOC entry 217 (class 1259 OID 24600)
-- Name: rol_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rol_id_rol_seq OWNER TO postgres;

--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 217
-- Name: rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public."Rol".id_rol;


--
-- TOC entry 4674 (class 2604 OID 24624)
-- Name: Client id_client; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client" ALTER COLUMN id_client SET DEFAULT nextval('public.client_id_client_seq'::regclass);


--
-- TOC entry 4683 (class 2604 OID 24662)
-- Name: Invoice id_invoice; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice" ALTER COLUMN id_invoice SET DEFAULT nextval('public.invoice_id_invoice_seq'::regclass);


--
-- TOC entry 4690 (class 2604 OID 24694)
-- Name: Invoice-Product id_invoice; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice-Product" ALTER COLUMN id_invoice SET DEFAULT nextval('public."Invoice-Product_id_invoice_seq"'::regclass);


--
-- TOC entry 4691 (class 2604 OID 24695)
-- Name: Invoice-Product id_product; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice-Product" ALTER COLUMN id_product SET DEFAULT nextval('public."Invoice-Product_id_product_seq"'::regclass);


--
-- TOC entry 4687 (class 2604 OID 24669)
-- Name: Payment_Method id_payment_method; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_Method" ALTER COLUMN id_payment_method SET DEFAULT nextval('public.payment_method_id_payment_method_seq'::regclass);


--
-- TOC entry 4678 (class 2604 OID 24636)
-- Name: Product id_product; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id_product SET DEFAULT nextval('public.product_id_product_seq'::regclass);


--
-- TOC entry 4671 (class 2604 OID 24604)
-- Name: Rol id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol" ALTER COLUMN id_rol SET DEFAULT nextval('public.rol_id_rol_seq'::regclass);


--
-- TOC entry 4666 (class 2604 OID 24590)
-- Name: User id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id_user SET DEFAULT nextval('public."User_id_user_seq"'::regclass);


--
-- TOC entry 4670 (class 2604 OID 24677)
-- Name: User id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id_rol SET DEFAULT nextval('public."User_id_rol_seq"'::regclass);


--
-- TOC entry 4854 (class 0 OID 24621)
-- Dependencies: 220
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Client" (id_client, name, last_name, cedula, email, phone, active, created, updated) FROM stdin;
\.


--
-- TOC entry 4858 (class 0 OID 24653)
-- Dependencies: 224
-- Data for Name: Invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Invoice" (id_invoice, date, created, updated) FROM stdin;
\.


--
-- TOC entry 4864 (class 0 OID 24691)
-- Dependencies: 230
-- Data for Name: Invoice-Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Invoice-Product" (id_invoice, id_product) FROM stdin;
\.


--
-- TOC entry 4860 (class 0 OID 24666)
-- Dependencies: 226
-- Data for Name: Payment_Method; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payment_Method" (id_payment_method, name, created, updated) FROM stdin;
\.


--
-- TOC entry 4856 (class 0 OID 24633)
-- Dependencies: 222
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id_product, name, price, quantity, active, created, updated) FROM stdin;
\.


--
-- TOC entry 4852 (class 0 OID 24601)
-- Dependencies: 218
-- Data for Name: Rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rol" (id_rol, name, created, updated) FROM stdin;
\.


--
-- TOC entry 4849 (class 0 OID 24582)
-- Dependencies: 215
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (name, last_name, cedula, id_user, email, phone, created, updated, active, id_rol) FROM stdin;
\.


--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 228
-- Name: Invoice-Product_id_invoice_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Invoice-Product_id_invoice_seq"', 1, false);


--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 229
-- Name: Invoice-Product_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Invoice-Product_id_product_seq"', 1, false);


--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 227
-- Name: User_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_rol_seq"', 1, false);


--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 216
-- Name: User_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_user_seq"', 1, false);


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 219
-- Name: client_id_client_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_client_seq', 1, false);


--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_id_invoice_seq', 1, false);


--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 225
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_method_id_payment_method_seq', 1, false);


--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_product_seq', 1, false);


--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 217
-- Name: rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_rol_seq', 1, false);


--
-- TOC entry 4697 (class 2606 OID 24628)
-- Name: Client client_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT client_pk PRIMARY KEY (id_client);


--
-- TOC entry 4701 (class 2606 OID 24664)
-- Name: Invoice invoice_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_pk PRIMARY KEY (id_invoice);


--
-- TOC entry 4703 (class 2606 OID 24675)
-- Name: Payment_Method payment_method_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_Method"
    ADD CONSTRAINT payment_method_pk PRIMARY KEY (id_payment_method);


--
-- TOC entry 4699 (class 2606 OID 24644)
-- Name: Product product_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT product_pk PRIMARY KEY (id_product);


--
-- TOC entry 4695 (class 2606 OID 24606)
-- Name: Rol rol_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol"
    ADD CONSTRAINT rol_pk PRIMARY KEY (id_rol);


--
-- TOC entry 4693 (class 2606 OID 24597)
-- Name: User user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT user_pk PRIMARY KEY (id_user);


--
-- TOC entry 4705 (class 2606 OID 24696)
-- Name: Invoice-Product invoice_product_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice-Product"
    ADD CONSTRAINT invoice_product_fk FOREIGN KEY (id_invoice) REFERENCES public."Invoice"(id_invoice);


--
-- TOC entry 4704 (class 2606 OID 24684)
-- Name: User user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT user_fk FOREIGN KEY (id_rol) REFERENCES public."Rol"(id_rol);


-- Completed on 2023-10-01 23:31:50

--
-- PostgreSQL database dump complete
--

