--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-30 05:22:22

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

DROP DATABASE IF EXISTS db_sdbs;
--
-- TOC entry 4932 (class 1262 OID 25169)
-- Name: db_sdbs; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_sdbs WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';


ALTER DATABASE db_sdbs OWNER TO postgres;

\connect db_sdbs

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
-- TOC entry 228 (class 1255 OID 25170)
-- Name: update_timestamp(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated = now();
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_timestamp() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 25171)
-- Name: Client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Client" (
    id_client integer NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    cedula character varying(10) NOT NULL,
    email character varying(30) NOT NULL,
    phone character varying(12) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Client" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 25179)
-- Name: Invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice" (
    id_invoice integer NOT NULL,
    date date DEFAULT now() NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL,
    id_user integer NOT NULL,
    id_client integer NOT NULL,
    id_payment_method integer NOT NULL
);


ALTER TABLE public."Invoice" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 25185)
-- Name: Invoice_Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice_Product" (
    id_invoice integer NOT NULL,
    id_product integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);


ALTER TABLE public."Invoice_Product" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 25189)
-- Name: Payment_method; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payment_method" (
    id_payment_method integer NOT NULL,
    name text NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Payment_method" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25196)
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id_product integer NOT NULL,
    name text NOT NULL,
    price double precision NOT NULL,
    quantity integer DEFAULT 0 NOT NULL,
    active boolean DEFAULT true NOT NULL,
    id_user integer NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 25205)
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
-- TOC entry 221 (class 1259 OID 25212)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id_user integer NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    email character varying(30) NOT NULL,
    cedula character varying(10) NOT NULL,
    phone character varying(12) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL,
    id_rol integer NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 25220)
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
-- TOC entry 4933 (class 0 OID 0)
-- Dependencies: 222
-- Name: client_id_client_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_client_seq OWNED BY public."Client".id_client;


--
-- TOC entry 223 (class 1259 OID 25221)
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
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoice_id_invoice_seq OWNED BY public."Invoice".id_invoice;


--
-- TOC entry 224 (class 1259 OID 25222)
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
-- TOC entry 4935 (class 0 OID 0)
-- Dependencies: 224
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_method_id_payment_method_seq OWNED BY public."Payment_method".id_payment_method;


--
-- TOC entry 225 (class 1259 OID 25223)
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
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 225
-- Name: product_id_product_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_product_seq OWNED BY public."Product".id_product;


--
-- TOC entry 226 (class 1259 OID 25224)
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
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 226
-- Name: rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public."Rol".id_rol;


--
-- TOC entry 227 (class 1259 OID 25225)
-- Name: users_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_user_seq OWNER TO postgres;

--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 227
-- Name: users_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_user_seq OWNED BY public."User".id_user;


--
-- TOC entry 4718 (class 2604 OID 25226)
-- Name: Client id_client; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client" ALTER COLUMN id_client SET DEFAULT nextval('public.client_id_client_seq'::regclass);


--
-- TOC entry 4722 (class 2604 OID 25227)
-- Name: Invoice id_invoice; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice" ALTER COLUMN id_invoice SET DEFAULT nextval('public.invoice_id_invoice_seq'::regclass);


--
-- TOC entry 4727 (class 2604 OID 25228)
-- Name: Payment_method id_payment_method; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_method" ALTER COLUMN id_payment_method SET DEFAULT nextval('public.payment_method_id_payment_method_seq'::regclass);


--
-- TOC entry 4730 (class 2604 OID 25229)
-- Name: Product id_product; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id_product SET DEFAULT nextval('public.product_id_product_seq'::regclass);


--
-- TOC entry 4735 (class 2604 OID 25230)
-- Name: Rol id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol" ALTER COLUMN id_rol SET DEFAULT nextval('public.rol_id_rol_seq'::regclass);


--
-- TOC entry 4738 (class 2604 OID 25231)
-- Name: User id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);


--
-- TOC entry 4914 (class 0 OID 25171)
-- Dependencies: 215
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Client" VALUES (3, 'Gabrielz', 'Villanueva', 'V30687289', 'gabrielvilla@gmail.com', '412-1234567', true, '2023-10-05 18:53:19.881986-04', '2023-10-05 18:53:19.881986-04');
INSERT INTO public."Client" VALUES (45, 'Yesenia', 'Hernandez', 'V13067619', 'yeseniah3@hotmail.com', '412-5951408', true, '2023-10-15 17:08:40.349944-04', '2023-10-15 17:08:40.349944-04');
INSERT INTO public."Client" VALUES (2, 'Santiago', 'Anselmi32', 'V30520366', 'santiagoanselmih3@gmail.com', '412-3892635', true, '2023-10-05 18:52:00.833481-04', '2023-10-15 17:13:53.765182-04');
INSERT INTO public."Client" VALUES (46, 'Pedro', 'Alba', 'V27606537', 'pedro@gmail.com', '412-4326534', true, '2023-10-15 17:16:58.475565-04', '2023-10-15 17:16:58.475565-04');
INSERT INTO public."Client" VALUES (48, 'Teresa', 'Díaz', 'E10481171', 'teresadiazh3@gmail.com', '412-3781847', true, '2023-10-15 17:18:52.253535-04', '2023-10-15 17:18:52.253535-04');
INSERT INTO public."Client" VALUES (47, 'Omar', 'Rosario', 'E10612312', 'omarrosario@gmail.com', '416-3956341', true, '2023-10-15 17:17:46.728422-04', '2023-10-21 21:18:23.908869-04');
INSERT INTO public."Client" VALUES (52, 'Juana', 'Hernandez', 'V13067620', 'juana@hotmail.com', '412-5951408', true, '2023-10-23 21:03:08.054914-04', '2023-10-23 21:03:34.397285-04');
INSERT INTO public."Client" VALUES (49, 'prueba', 'pruebaapellido', 'V30520777', 'PRUEBA@gmail.com', '416-2934124', false, '2023-10-18 20:07:00.899675-04', '2023-10-30 05:20:06.254213-04');
INSERT INTO public."Client" VALUES (50, 'prueba', 'pruebaapellido', 'J30520366', 'PRUEBA@gmail.com', '416-9341242', false, '2023-10-21 21:18:09.128286-04', '2023-10-30 05:20:06.254213-04');
INSERT INTO public."Client" VALUES (51, 'prueba2', 'pruebaapellido2', 'E30520366', 'PRUEBA2@gmail.com', '412-2934124', false, '2023-10-21 21:19:43.796115-04', '2023-10-30 05:20:06.254213-04');
INSERT INTO public."Client" VALUES (54, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', false, '2023-10-25 01:44:16.264974-04', '2023-10-30 05:20:06.254213-04');


--
-- TOC entry 4915 (class 0 OID 25179)
-- Dependencies: 216
-- Data for Name: Invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Invoice" VALUES (13, '2023-10-14', '2023-10-14 21:21:58.823486-04', '2023-10-14 21:21:58.823486-04', 2, 2, 3);
INSERT INTO public."Invoice" VALUES (14, '2023-10-14', '2023-10-14 21:30:26.065141-04', '2023-10-14 21:30:26.065141-04', 2, 2, 1);
INSERT INTO public."Invoice" VALUES (15, '2023-10-15', '2023-10-15 17:39:16.292834-04', '2023-10-15 17:39:16.292834-04', 2, 48, 2);
INSERT INTO public."Invoice" VALUES (16, '2023-10-23', '2023-10-23 21:04:30.741857-04', '2023-10-23 21:04:30.741857-04', 2, 45, 1);
INSERT INTO public."Invoice" VALUES (17, '2023-10-25', '2023-10-25 01:21:21.781423-04', '2023-10-25 01:21:21.781423-04', 2, 2, 2);
INSERT INTO public."Invoice" VALUES (18, '2023-10-30', '2023-10-30 04:25:06.901751-04', '2023-10-30 04:25:06.901751-04', 3, 2, 3);


--
-- TOC entry 4916 (class 0 OID 25185)
-- Dependencies: 217
-- Data for Name: Invoice_Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Invoice_Product" VALUES (13, 2, 1);
INSERT INTO public."Invoice_Product" VALUES (13, 1, 1);
INSERT INTO public."Invoice_Product" VALUES (14, 9, 4);
INSERT INTO public."Invoice_Product" VALUES (14, 1, 2);
INSERT INTO public."Invoice_Product" VALUES (15, 3, 6);
INSERT INTO public."Invoice_Product" VALUES (15, 9, 5);
INSERT INTO public."Invoice_Product" VALUES (15, 6, 4);
INSERT INTO public."Invoice_Product" VALUES (15, 2, 4);
INSERT INTO public."Invoice_Product" VALUES (16, 9, 35);
INSERT INTO public."Invoice_Product" VALUES (16, 1, 2);
INSERT INTO public."Invoice_Product" VALUES (16, 7, 5);
INSERT INTO public."Invoice_Product" VALUES (16, 5, 5);
INSERT INTO public."Invoice_Product" VALUES (16, 3, 2);
INSERT INTO public."Invoice_Product" VALUES (16, 4, 3);
INSERT INTO public."Invoice_Product" VALUES (16, 6, 2);
INSERT INTO public."Invoice_Product" VALUES (16, 2, 6);
INSERT INTO public."Invoice_Product" VALUES (16, 8, 5);
INSERT INTO public."Invoice_Product" VALUES (17, 6, 1);
INSERT INTO public."Invoice_Product" VALUES (18, 6, 3);
INSERT INTO public."Invoice_Product" VALUES (18, 3, 3);
INSERT INTO public."Invoice_Product" VALUES (18, 1, 4);
INSERT INTO public."Invoice_Product" VALUES (18, 9, 4);


--
-- TOC entry 4917 (class 0 OID 25189)
-- Dependencies: 218
-- Data for Name: Payment_method; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Payment_method" VALUES (1, 'Punto de Venta', '2023-10-14 20:10:43.289502-04', '2023-10-14 20:10:43.289502-04');
INSERT INTO public."Payment_method" VALUES (2, 'Efectivo', '2023-10-14 20:10:50.082039-04', '2023-10-14 20:10:50.082039-04');
INSERT INTO public."Payment_method" VALUES (3, 'Pago Movil', '2023-10-14 20:10:59.984785-04', '2023-10-14 21:05:32.522171-04');


--
-- TOC entry 4918 (class 0 OID 25196)
-- Dependencies: 219
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Product" VALUES (7, 'Refresco Glup', 3, 35, true, 1, '2023-10-10 21:39:40.223505-04', '2023-10-23 21:04:30.76173-04');
INSERT INTO public."Product" VALUES (5, 'Galletas Marilu', 5, 35, true, 1, '2023-10-10 21:39:04.687965-04', '2023-10-23 21:04:30.762498-04');
INSERT INTO public."Product" VALUES (4, 'Galletas Oreo', 4, 37, true, 1, '2023-10-10 21:38:55.866599-04', '2023-10-23 21:04:30.764118-04');
INSERT INTO public."Product" VALUES (8, 'Chocolate Flaquito', 5, 35, true, 1, '2023-10-10 21:39:53.193246-04', '2023-10-23 21:04:30.766689-04');
INSERT INTO public."Product" VALUES (10, 'Refresco Coca Cola', 10, 5, true, 1, '2023-10-30 00:05:34.296217-04', '2023-10-30 00:05:49.50912-04');
INSERT INTO public."Product" VALUES (12, 'Refresco Pepsi Cola', 15, 10, true, 1, '2023-10-30 00:23:29.12647-04', '2023-10-30 00:23:29.12647-04');
INSERT INTO public."Product" VALUES (11, 'Cocosette', 0, 0, false, 1, '2023-10-30 00:06:49.388372-04', '2023-10-30 00:24:30.315714-04');
INSERT INTO public."Product" VALUES (2, 'Cocosette', 2, 6, true, 1, '2023-10-10 21:38:26.760231-04', '2023-10-30 00:54:08.81298-04');
INSERT INTO public."Product" VALUES (3, 'Susy', 4, 29, true, 1, '2023-10-10 21:38:41.199964-04', '2023-10-30 04:25:06.917161-04');
INSERT INTO public."Product" VALUES (1, 'Galleta Maria Clasica', 4, 34, true, 1, '2023-10-10 20:54:40.568439-04', '2023-10-30 04:25:06.91797-04');
INSERT INTO public."Product" VALUES (9, 'Chocolate Cri Cri', 5, 6, true, 1, '2023-10-10 21:40:14.05337-04', '2023-10-30 04:25:06.9187-04');
INSERT INTO public."Product" VALUES (13, 'Doritos', 5, 30, true, 10, '2023-10-30 04:48:03.472893-04', '2023-10-30 04:48:03.472893-04');
INSERT INTO public."Product" VALUES (6, 'Flips', 5, 30, false, 1, '2023-10-10 21:39:18.618148-04', '2023-10-30 04:55:40.678659-04');


--
-- TOC entry 4919 (class 0 OID 25205)
-- Dependencies: 220
-- Data for Name: Rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Rol" VALUES (1, 'admin', '2023-10-07 23:02:11.754922-04', '2023-10-07 23:02:11.754922-04');
INSERT INTO public."Rol" VALUES (2, 'employee', '2023-10-07 23:02:16.112664-04', '2023-10-07 23:02:16.112664-04');


--
-- TOC entry 4920 (class 0 OID 25212)
-- Dependencies: 221
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" VALUES (1, 'Santi', 'Anselmi', 'santiagoanselmih3@gmail.com', 'V30520366', '412-3892635', true, '2023-10-07 23:02:20.921196-04', '2023-10-12 16:56:08.149384-04', 1);
INSERT INTO public."User" VALUES (3, 'Joselito', 'Perez', 'Joselito@gmail.com', 'V33870983', '412-8220244', true, '2023-10-30 01:03:52.371559-04', '2023-10-30 01:03:52.371559-04', 2);
INSERT INTO public."User" VALUES (4, 'Braulio', 'González', 'Braulio@gmail.com', 'V33870313', '412-8220244', true, '2023-10-30 01:04:27.115278-04', '2023-10-30 01:04:27.115278-04', 2);
INSERT INTO public."User" VALUES (8, 'Jeremias', 'Rosario', 'Jeremias@gmail.com', 'V27606123', '416-4132153', true, '2023-10-30 01:13:56.537285-04', '2023-10-30 01:13:56.537285-04', 2);
INSERT INTO public."User" VALUES (9, 'Victoria', 'De la Cruz', 'Victoria@gmail.com', 'V13051123', '424-1152853', true, '2023-10-30 01:14:37.516646-04', '2023-10-30 01:14:37.516646-04', 2);
INSERT INTO public."User" VALUES (2, 'Santi2', 'Anselmi', 'santiagoanselmih3@gmail.com', 'V30520365', '412-3892635', true, '2023-10-08 18:03:07.765411-04', '2023-10-30 01:58:14.58844-04', 2);
INSERT INTO public."User" VALUES (10, 'Gabriel', 'Villanueva', 'gabrielvilla@gmail.com', 'V30512462', '414-3135354', true, '2023-10-30 04:46:46.291389-04', '2023-10-30 04:46:46.291389-04', 1);
INSERT INTO public."User" VALUES (7, 'Romero', 'González', 'Romero@gmail.com', 'V30520312', '412-8520144', true, '2023-10-30 01:12:52.550691-04', '2023-10-30 05:03:05.304413-04', 2);


--
-- TOC entry 4939 (class 0 OID 0)
-- Dependencies: 222
-- Name: client_id_client_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_client_seq', 56, true);


--
-- TOC entry 4940 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_id_invoice_seq', 18, true);


--
-- TOC entry 4941 (class 0 OID 0)
-- Dependencies: 224
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_method_id_payment_method_seq', 3, true);


--
-- TOC entry 4942 (class 0 OID 0)
-- Dependencies: 225
-- Name: product_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_product_seq', 13, true);


--
-- TOC entry 4943 (class 0 OID 0)
-- Dependencies: 226
-- Name: rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_rol_seq', 2, true);


--
-- TOC entry 4944 (class 0 OID 0)
-- Dependencies: 227
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 9, true);


--
-- TOC entry 4743 (class 2606 OID 25233)
-- Name: Client cedula_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT cedula_unique UNIQUE (cedula);


--
-- TOC entry 4745 (class 2606 OID 25235)
-- Name: Client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT client_pkey PRIMARY KEY (id_client);


--
-- TOC entry 4747 (class 2606 OID 25237)
-- Name: Invoice invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id_invoice);


--
-- TOC entry 4749 (class 2606 OID 25239)
-- Name: Payment_method payment_method_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_method"
    ADD CONSTRAINT payment_method_pkey PRIMARY KEY (id_payment_method);


--
-- TOC entry 4751 (class 2606 OID 25241)
-- Name: Product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT product_pkey PRIMARY KEY (id_product);


--
-- TOC entry 4753 (class 2606 OID 25243)
-- Name: Rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol"
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 4755 (class 2606 OID 25245)
-- Name: User user_cedula_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT user_cedula_unique UNIQUE (cedula);


--
-- TOC entry 4757 (class 2606 OID 25247)
-- Name: User users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- TOC entry 4765 (class 2620 OID 25248)
-- Name: Client update_client; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_client BEFORE UPDATE ON public."Client" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4766 (class 2620 OID 25249)
-- Name: Invoice update_invoice; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_invoice BEFORE UPDATE ON public."Invoice" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4767 (class 2620 OID 25250)
-- Name: Payment_method update_paymenth_method; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_paymenth_method BEFORE UPDATE ON public."Payment_method" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4768 (class 2620 OID 25251)
-- Name: Product update_product; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_product BEFORE UPDATE ON public."Product" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4769 (class 2620 OID 25252)
-- Name: Rol update_rol; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_rol BEFORE UPDATE ON public."Rol" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4770 (class 2620 OID 25253)
-- Name: User update_user; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_user BEFORE UPDATE ON public."User" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4758 (class 2606 OID 25254)
-- Name: Invoice invoice_id_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_client_fkey FOREIGN KEY (id_client) REFERENCES public."Client"(id_client);


--
-- TOC entry 4759 (class 2606 OID 25259)
-- Name: Invoice invoice_id_payment_method_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_payment_method_fkey FOREIGN KEY (id_payment_method) REFERENCES public."Payment_method"(id_payment_method);


--
-- TOC entry 4760 (class 2606 OID 25264)
-- Name: Invoice invoice_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_user_fkey FOREIGN KEY (id_user) REFERENCES public."User"(id_user);


--
-- TOC entry 4761 (class 2606 OID 25269)
-- Name: Invoice_Product invoice_product_id_invoice_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice_Product"
    ADD CONSTRAINT invoice_product_id_invoice_fkey FOREIGN KEY (id_invoice) REFERENCES public."Invoice"(id_invoice);


--
-- TOC entry 4762 (class 2606 OID 25274)
-- Name: Invoice_Product invoice_product_id_product_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice_Product"
    ADD CONSTRAINT invoice_product_id_product_fkey FOREIGN KEY (id_product) REFERENCES public."Product"(id_product);


--
-- TOC entry 4763 (class 2606 OID 25279)
-- Name: Product product_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT product_id_user_fkey FOREIGN KEY (id_user) REFERENCES public."User"(id_user);


--
-- TOC entry 4764 (class 2606 OID 25284)
-- Name: User users_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT users_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public."Rol"(id_rol);


-- Completed on 2023-10-30 05:22:22

--
-- PostgreSQL database dump complete
--

