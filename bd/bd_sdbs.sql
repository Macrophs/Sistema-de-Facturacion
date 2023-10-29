--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-12 18:28:07

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
-- TOC entry 4931 (class 1262 OID 16853)
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
-- TOC entry 228 (class 1255 OID 16965)
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
-- TOC entry 215 (class 1259 OID 16854)
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
-- TOC entry 216 (class 1259 OID 16862)
-- Name: Invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice" (
    id_invoice integer NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL,
    id_user integer NOT NULL,
    id_client integer NOT NULL,
    id_payment_method integer NOT NULL
);


ALTER TABLE public."Invoice" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16868)
-- Name: Invoice_Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoice_Product" (
    id_invoice integer NOT NULL,
    id_product integer NOT NULL
);


ALTER TABLE public."Invoice_Product" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16871)
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
-- TOC entry 219 (class 1259 OID 16878)
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
-- TOC entry 220 (class 1259 OID 16887)
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
-- TOC entry 221 (class 1259 OID 16894)
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
-- TOC entry 222 (class 1259 OID 16902)
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
-- TOC entry 4932 (class 0 OID 0)
-- Dependencies: 222
-- Name: client_id_client_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_client_seq OWNED BY public."Client".id_client;


--
-- TOC entry 223 (class 1259 OID 16903)
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
-- TOC entry 4933 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoice_id_invoice_seq OWNED BY public."Invoice".id_invoice;


--
-- TOC entry 224 (class 1259 OID 16904)
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
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 224
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_method_id_payment_method_seq OWNED BY public."Payment_method".id_payment_method;


--
-- TOC entry 225 (class 1259 OID 16905)
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
-- TOC entry 4935 (class 0 OID 0)
-- Dependencies: 225
-- Name: product_id_product_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_product_seq OWNED BY public."Product".id_product;


--
-- TOC entry 226 (class 1259 OID 16906)
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
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 226
-- Name: rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public."Rol".id_rol;


--
-- TOC entry 227 (class 1259 OID 16907)
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
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 227
-- Name: users_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_user_seq OWNED BY public."User".id_user;


--
-- TOC entry 4718 (class 2604 OID 16908)
-- Name: Client id_client; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client" ALTER COLUMN id_client SET DEFAULT nextval('public.client_id_client_seq'::regclass);


--
-- TOC entry 4722 (class 2604 OID 16909)
-- Name: Invoice id_invoice; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice" ALTER COLUMN id_invoice SET DEFAULT nextval('public.invoice_id_invoice_seq'::regclass);


--
-- TOC entry 4726 (class 2604 OID 16910)
-- Name: Payment_method id_payment_method; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_method" ALTER COLUMN id_payment_method SET DEFAULT nextval('public.payment_method_id_payment_method_seq'::regclass);


--
-- TOC entry 4729 (class 2604 OID 16911)
-- Name: Product id_product; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id_product SET DEFAULT nextval('public.product_id_product_seq'::regclass);


--
-- TOC entry 4734 (class 2604 OID 16912)
-- Name: Rol id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol" ALTER COLUMN id_rol SET DEFAULT nextval('public.rol_id_rol_seq'::regclass);


--
-- TOC entry 4737 (class 2604 OID 16913)
-- Name: User id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);


--
-- TOC entry 4913 (class 0 OID 16854)
-- Dependencies: 215
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Client" VALUES (5, 'prueba', 'pruebaapellido', 'V12345124', 'PRUEBA@gmail.com', '412-6293412', true, '2023-10-05 20:59:01.761007-04', '2023-10-05 20:59:01.761007-04');
INSERT INTO public."Client" VALUES (3, 'Gabrielz', 'Villanueva', 'V30687289', 'gabrielvilla@gmail.com', '412-1234567', true, '2023-10-05 18:53:19.881986-04', '2023-10-05 18:53:19.881986-04');
INSERT INTO public."Client" VALUES (17, 'prueba', 'pruebaapellido', 'V12345224', 'PRUEBA@gmail.com', '416-2934124', false, '2023-10-05 23:12:47.383709-04', '2023-10-05 23:12:47.383709-04');
INSERT INTO public."Client" VALUES (18, 'prueba', 'pruebaapellido', 'V23121321', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-05 23:47:33.866328-04', '2023-10-05 23:47:33.866328-04');
INSERT INTO public."Client" VALUES (13, 'aaaaaaaaaaaaS', 'anselmi', 'V12345125', 'santiagoanselmih3@gmail.com', '012-3892612', true, '2023-10-05 21:01:25.774402-04', '2023-10-05 21:01:25.774402-04');
INSERT INTO public."Client" VALUES (21, 'prueba', 'pruebaapellido', 'V12345126', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 18:22:07.392609-04', '2023-10-07 18:22:07.392609-04');
INSERT INTO public."Client" VALUES (28, 'prueba', 'pruebaapellido', 'V12345123', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 18:26:34.794016-04', '2023-10-07 18:26:34.794016-04');
INSERT INTO public."Client" VALUES (29, 'prueba', 'pruebaapellido', 'V12345131', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 18:51:39.3623-04', '2023-10-07 18:51:39.3623-04');
INSERT INTO public."Client" VALUES (8, 'aaaaaaaaaaaas', 'anselmi', 'V12345127', 'santiagoanselmih3@gmail.com', '012-3892612', true, '2023-10-05 21:00:33.535862-04', '2023-10-05 21:00:33.535862-04');
INSERT INTO public."Client" VALUES (16, 'prueba', 'pruebaapellido', 'V12345122', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-05 21:02:05.156674-04', '2023-10-05 21:02:05.156674-04');
INSERT INTO public."Client" VALUES (30, 'prueba', 'pruebaapellido', 'V12346124', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 19:34:32.47828-04', '2023-10-07 19:34:32.47828-04');
INSERT INTO public."Client" VALUES (31, 'prueba', 'pruebaapellido', 'V12345834', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 19:36:35.299075-04', '2023-10-07 19:36:35.299075-04');
INSERT INTO public."Client" VALUES (32, 'prueba', 'pruebaapellido', 'V12347124', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-07 19:42:33.062635-04', '2023-10-07 19:42:33.062635-04');
INSERT INTO public."Client" VALUES (11, 'prueba', 'pruebaapellido', 'V12345129', 'PRUEBA@gmail.com', '416-2934124', true, '2023-10-05 21:01:00.500115-04', '2023-10-05 21:01:00.500115-04');
INSERT INTO public."Client" VALUES (33, 'prueba', 'pruebaapellido', 'V12345189', 'PRUEBA@gmail.com', '016-2934124', true, '2023-10-07 19:47:45.69472-04', '2023-10-07 19:47:45.69472-04');
INSERT INTO public."Client" VALUES (34, 'prueba', 'pruebaapellido', 'V12343122', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-07 19:48:43.650751-04', '2023-10-07 19:48:43.650751-04');
INSERT INTO public."Client" VALUES (35, 'prueba', 'pruebaapellido', 'V12345999', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-07 19:50:48.627535-04', '2023-10-07 19:50:48.627535-04');
INSERT INTO public."Client" VALUES (36, 'prueba', 'pruebaapellido', 'J30520399', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-07 19:51:22.120446-04', '2023-10-07 19:51:22.120446-04');
INSERT INTO public."Client" VALUES (37, 'prueba', 'pruebaapellido', 'J30520132', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-07 19:53:33.107807-04', '2023-10-07 19:53:33.107807-04');
INSERT INTO public."Client" VALUES (38, 'santiagoaaaaaaaaaaaaaaaa', 'anselmi32111aaaaaaaaaa', 'V23121331', 'santiagoanselmih3@gmail.com', '041-3892623', true, '2023-10-07 19:55:05.498453-04', '2023-10-07 19:55:05.498453-04');
INSERT INTO public."Client" VALUES (39, 'prueba', 'pruebaapellido', 'V30520321', 'PRUEBA@gmail.com', '041-2934124', true, '2023-10-07 20:00:11.564198-04', '2023-10-07 20:00:11.564198-04');
INSERT INTO public."Client" VALUES (2, 'Santuu', 'Anselmi32', 'V30520365', 'santiagoanselmih3@gmail.com', '412-3892635', true, '2023-10-05 18:52:00.833481-04', '2023-10-12 17:00:57.512439-04');


--
-- TOC entry 4914 (class 0 OID 16862)
-- Dependencies: 216
-- Data for Name: Invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4915 (class 0 OID 16868)
-- Dependencies: 217
-- Data for Name: Invoice_Product; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4916 (class 0 OID 16871)
-- Dependencies: 218
-- Data for Name: Payment_method; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4917 (class 0 OID 16878)
-- Dependencies: 219
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Product" VALUES (1, 'Galleta Maria Clasica', 4, 40, true, 1, '2023-10-10 20:54:40.568439-04', '2023-10-10 20:54:40.568439-04');
INSERT INTO public."Product" VALUES (2, 'Cocosette', 4, 40, true, 1, '2023-10-10 21:38:26.760231-04', '2023-10-10 21:38:26.760231-04');
INSERT INTO public."Product" VALUES (3, 'Susy', 4, 40, true, 1, '2023-10-10 21:38:41.199964-04', '2023-10-10 21:38:41.199964-04');
INSERT INTO public."Product" VALUES (4, 'Galletas Oreo', 4, 40, true, 1, '2023-10-10 21:38:55.866599-04', '2023-10-10 21:38:55.866599-04');
INSERT INTO public."Product" VALUES (5, 'Galletas Marilu', 5, 40, true, 1, '2023-10-10 21:39:04.687965-04', '2023-10-10 21:39:04.687965-04');
INSERT INTO public."Product" VALUES (6, 'Flips', 5, 40, true, 1, '2023-10-10 21:39:18.618148-04', '2023-10-10 21:39:18.618148-04');
INSERT INTO public."Product" VALUES (7, 'Refresco Glup', 3, 40, true, 1, '2023-10-10 21:39:40.223505-04', '2023-10-10 21:39:40.223505-04');
INSERT INTO public."Product" VALUES (8, 'Chocolate Flaquito', 5, 40, true, 1, '2023-10-10 21:39:53.193246-04', '2023-10-10 21:39:53.193246-04');
INSERT INTO public."Product" VALUES (9, 'Chocolate Cri Cri', 5, 40, true, 1, '2023-10-10 21:40:14.05337-04', '2023-10-10 21:40:14.05337-04');


--
-- TOC entry 4918 (class 0 OID 16887)
-- Dependencies: 220
-- Data for Name: Rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Rol" VALUES (1, 'admin', '2023-10-07 23:02:11.754922-04', '2023-10-07 23:02:11.754922-04');
INSERT INTO public."Rol" VALUES (2, 'employee', '2023-10-07 23:02:16.112664-04', '2023-10-07 23:02:16.112664-04');


--
-- TOC entry 4919 (class 0 OID 16894)
-- Dependencies: 221
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" VALUES (2, 'Santi2', 'Anselmi', 'santiagoanselmih3@gmail.com', 'V30520365', '412-3892635', true, '2023-10-08 18:03:07.765411-04', '2023-10-08 18:03:07.765411-04', 2);
INSERT INTO public."User" VALUES (1, 'Santi', 'Anselmi', 'santiagoanselmih3@gmail.com', 'V30520366', '412-3892635', true, '2023-10-07 23:02:20.921196-04', '2023-10-12 16:56:08.149384-04', 1);


--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 222
-- Name: client_id_client_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_client_seq', 39, true);


--
-- TOC entry 4939 (class 0 OID 0)
-- Dependencies: 223
-- Name: invoice_id_invoice_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_id_invoice_seq', 1, false);


--
-- TOC entry 4940 (class 0 OID 0)
-- Dependencies: 224
-- Name: payment_method_id_payment_method_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_method_id_payment_method_seq', 1, false);


--
-- TOC entry 4941 (class 0 OID 0)
-- Dependencies: 225
-- Name: product_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_product_seq', 9, true);


--
-- TOC entry 4942 (class 0 OID 0)
-- Dependencies: 226
-- Name: rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_rol_seq', 2, true);


--
-- TOC entry 4943 (class 0 OID 0)
-- Dependencies: 227
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 2, true);


--
-- TOC entry 4742 (class 2606 OID 16962)
-- Name: Client cedula_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT cedula_unique UNIQUE (cedula);


--
-- TOC entry 4744 (class 2606 OID 16915)
-- Name: Client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT client_pkey PRIMARY KEY (id_client);


--
-- TOC entry 4746 (class 2606 OID 16917)
-- Name: Invoice invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id_invoice);


--
-- TOC entry 4748 (class 2606 OID 16919)
-- Name: Payment_method payment_method_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_method"
    ADD CONSTRAINT payment_method_pkey PRIMARY KEY (id_payment_method);


--
-- TOC entry 4750 (class 2606 OID 16921)
-- Name: Product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT product_pkey PRIMARY KEY (id_product);


--
-- TOC entry 4752 (class 2606 OID 16923)
-- Name: Rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol"
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 4754 (class 2606 OID 16964)
-- Name: User user_cedula_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT user_cedula_unique UNIQUE (cedula);


--
-- TOC entry 4756 (class 2606 OID 16925)
-- Name: User users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- TOC entry 4764 (class 2620 OID 16967)
-- Name: Client update_client; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_client BEFORE UPDATE ON public."Client" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4765 (class 2620 OID 16970)
-- Name: Invoice update_invoice; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_invoice BEFORE UPDATE ON public."Invoice" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4766 (class 2620 OID 16971)
-- Name: Payment_method update_paymenth_method; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_paymenth_method BEFORE UPDATE ON public."Payment_method" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4767 (class 2620 OID 16968)
-- Name: Product update_product; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_product BEFORE UPDATE ON public."Product" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4768 (class 2620 OID 16969)
-- Name: Rol update_rol; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_rol BEFORE UPDATE ON public."Rol" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4769 (class 2620 OID 16966)
-- Name: User update_user; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_user BEFORE UPDATE ON public."User" FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();


--
-- TOC entry 4757 (class 2606 OID 16926)
-- Name: Invoice invoice_id_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_client_fkey FOREIGN KEY (id_client) REFERENCES public."Client"(id_client);


--
-- TOC entry 4758 (class 2606 OID 16931)
-- Name: Invoice invoice_id_payment_method_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_payment_method_fkey FOREIGN KEY (id_payment_method) REFERENCES public."Payment_method"(id_payment_method);


--
-- TOC entry 4759 (class 2606 OID 16936)
-- Name: Invoice invoice_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT invoice_id_user_fkey FOREIGN KEY (id_user) REFERENCES public."User"(id_user);


--
-- TOC entry 4760 (class 2606 OID 16941)
-- Name: Invoice_Product invoice_product_id_invoice_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice_Product"
    ADD CONSTRAINT invoice_product_id_invoice_fkey FOREIGN KEY (id_invoice) REFERENCES public."Invoice"(id_invoice);


--
-- TOC entry 4761 (class 2606 OID 16946)
-- Name: Invoice_Product invoice_product_id_product_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Invoice_Product"
    ADD CONSTRAINT invoice_product_id_product_fkey FOREIGN KEY (id_product) REFERENCES public."Product"(id_product);


--
-- TOC entry 4762 (class 2606 OID 16951)
-- Name: Product product_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT product_id_user_fkey FOREIGN KEY (id_user) REFERENCES public."User"(id_user);


--
-- TOC entry 4763 (class 2606 OID 16956)
-- Name: User users_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT users_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public."Rol"(id_rol);


-- Completed on 2023-10-12 18:28:08

--
-- PostgreSQL database dump complete
--

