
CREATE TABLE CODE
(
	COMMON_CODE          NUMBER(5) NOT NULL ,
	UPPER_COMMON_CODE    NUMBER(5) NOT NULL ,
	CODE                 NUMBER(5) NOT NULL ,
	CODE_NAME            VARCHAR2(32) NOT NULL 
);



CREATE UNIQUE INDEX PK_CODE ON CODE
(COMMON_CODE   ASC);



ALTER TABLE CODE
	ADD CONSTRAINT  PK_CODE PRIMARY KEY (COMMON_CODE);



CREATE TABLE CS
(
	CS_NUM               NUMBER(8) NOT NULL ,
	CS_NAME              VARCHAR2(32) NOT NULL ,
	BIRTH_DATE           DATE NOT NULL ,
	CONTACT              CHAR(13) DEFAULT  '010-0000-0000'  NOT NULL ,
	CS_CLASSIFY_CODE     NUMBER(5) NOT NULL 
);



CREATE UNIQUE INDEX PK_CS ON CS
(CS_NUM   ASC);



ALTER TABLE CS
	ADD CONSTRAINT  PK_CS PRIMARY KEY (CS_NUM);



CREATE TABLE DC
(
	DC_CODE              NUMBER(5) NOT NULL ,
	DC_NAME              VARCHAR2(16) NOT NULL ,
	DC_RATE              NUMBER(3) NOT NULL 
);



CREATE UNIQUE INDEX PK_DC ON DC
(DC_CODE   ASC);



ALTER TABLE DC
	ADD CONSTRAINT  PK_DC PRIMARY KEY (DC_CODE);



CREATE TABLE DEPT
(
	DEPT_NUM             NUMBER(8) NOT NULL ,
	DEPT_NAME            VARCHAR2(32) NOT NULL 
);



CREATE UNIQUE INDEX PK_DEPT ON DEPT
(DEPT_NUM   ASC);



ALTER TABLE DEPT
	ADD CONSTRAINT  PK_DEPT PRIMARY KEY (DEPT_NUM);



CREATE TABLE EMC_EXIT
(
	ROOM_NUM             NUMBER(8) NOT NULL ,
	EMC_NUM              NUMBER(8) NOT NULL ,
	EMC_LOC_CODE         NUMBER(5) NOT NULL 
);



CREATE UNIQUE INDEX PK_EMC_EXIT ON EMC_EXIT
(EMC_NUM   ASC);



ALTER TABLE EMC_EXIT
	ADD CONSTRAINT  PK_EMC_EXIT PRIMARY KEY (EMC_NUM);



CREATE TABLE EMP
(
	EMP_NUM              NUMBER(8) NOT NULL ,
	DEPT_NUM             NUMBER(8) NOT NULL ,
	EMP_NAME             VARCHAR2(32) NOT NULL ,
	EMP_CONTACT          CHAR(13) DEFAULT  '010-0000-0000'  NOT NULL ,
	EMP_REG_NUM          CHAR(14) NOT NULL ,
	WORK_START_DATE      DATE NOT NULL ,
	TITLE                CHAR(5) NOT NULL 
);



CREATE UNIQUE INDEX PK_EMP ON EMP
(EMP_NUM   ASC);



ALTER TABLE EMP
	ADD CONSTRAINT  PK_EMP PRIMARY KEY (EMP_NUM);



CREATE TABLE MEM
(
	MEM_NUM              NUMBER(8) NOT NULL ,
	CS_NUM               NUMBER(8) NOT NULL ,
	REG_NUM              CHAR(14) NOT NULL ,
	MEM_ID               VARCHAR2(32) NOT NULL CONSTRAINT MEM_UNIQUE UNIQUE ,
	MEM_PW               VARCHAR2(128) NOT NULL ,
	POINT                NUMBER(8) DEFAULT  0  NOT NULL 
);



CREATE UNIQUE INDEX PK_MEM ON MEM
(MEM_NUM   ASC);



ALTER TABLE MEM
	ADD CONSTRAINT  PK_MEM PRIMARY KEY (MEM_NUM);



CREATE TABLE MOVIE
(
	MOVIE_NUM            NUMBER(8) NOT NULL ,
	MOVIE_NAME           VARCHAR2(32) NOT NULL ,
	SCRN_TIME            NUMBER(4) NOT NULL ,
	DIRECTOR             VARCHAR2(32) NOT NULL ,
	CAST                 VARCHAR2(32) NOT NULL ,
	GENRE                VARCHAR2(32) NOT NULL ,
	MOVIE_INTRO          VARCHAR2(300) NOT NULL ,
	SCRN_STATUS          CHAR(1) DEFAULT  'N'  NOT NULL ,
	COUNTRY              VARCHAR2(20) NOT NULL ,
	RELEASE_DATE         DATE NOT NULL ,
	AVG_STARS            NUMBER(11) NULL ,
	MOVIE_RATING_CODE    NUMBER(5) NOT NULL 
);



CREATE UNIQUE INDEX PK_MOVIE ON MOVIE
(MOVIE_NUM   ASC);



ALTER TABLE MOVIE
	ADD CONSTRAINT  PK_MOVIE PRIMARY KEY (MOVIE_NUM);



CREATE TABLE PAY_BANKLESS
(
	PAYMENT_NUM          NUMBER(8) NOT NULL ,
	VIRTUAL_ACC_NUM      CHAR(20) NOT NULL ,
	DEPOSIT_PERSON       VARCHAR2(32) NOT NULL 
);



CREATE UNIQUE INDEX PK_PAY_BANKLESS ON PAY_BANKLESS
(PAYMENT_NUM   ASC);



ALTER TABLE PAY_BANKLESS
	ADD CONSTRAINT  PK_PAY_BANKLESS PRIMARY KEY (PAYMENT_NUM);



CREATE TABLE PAY_CARD
(
	PAYMENT_NUM          NUMBER(8) NOT NULL ,
	CARD_NUM             CHAR(19) NOT NULL ,
	CARD_COMPANY         VARCHAR2(32) NOT NULL 
);



CREATE UNIQUE INDEX PK_PAY_CARD ON PAY_CARD
(PAYMENT_NUM   ASC);



ALTER TABLE PAY_CARD
	ADD CONSTRAINT  PK_PAY_CARD PRIMARY KEY (PAYMENT_NUM);



CREATE TABLE PAYMENT
(
	RESERVE_NUM          NUMBER(8) NOT NULL ,
	CS_NUM               NUMBER(8) NOT NULL ,
	PAYMENT_NUM          NUMBER(8) NOT NULL ,
	DC_CODE              NUMBER(5) NULL ,
	DC_PRICE             NUMBER(8) NULL ,
	TOTAL_PRICE          NUMBER(8) NOT NULL ,
	PAYMENT_DATE         DATE NULL ,
	PAYMENT_STATUS       CHAR(1) DEFAULT  'N'  NOT NULL ,
	APPROVAL_NUM         NUMBER(8) NULL ,
	USED_POINT           NUMBER(8) NULL ,
	PAYMENT_OPT_CODE     NUMBER(5) NOT NULL 
);



CREATE UNIQUE INDEX PK_PAYMENT ON PAYMENT
(PAYMENT_NUM   ASC);



ALTER TABLE PAYMENT
	ADD CONSTRAINT  PK_PAYMENT PRIMARY KEY (PAYMENT_NUM);



CREATE TABLE RESERVE
(
	RESERVE_NUM          NUMBER(8) NOT NULL ,
	PRINT_STATUS         CHAR(1) DEFAULT  'N'  NOT NULL 
);



CREATE UNIQUE INDEX PK_RESERVE ON RESERVE
(RESERVE_NUM   ASC);



ALTER TABLE RESERVE
	ADD CONSTRAINT  PK_RESERVE PRIMARY KEY (RESERVE_NUM);



CREATE TABLE REVIEW
(
	MOVIE_NUM            NUMBER(8) NOT NULL ,
	REVIEW_NUM           NUMBER(8) NOT NULL ,
	MEM_NUM              NUMBER(8) NOT NULL ,
	STARS                NUMBER(10) NOT NULL ,
	COMMENTS              VARCHAR2(128) NOT NULL 
);



CREATE UNIQUE INDEX PK_REVIEW ON REVIEW
(REVIEW_NUM   ASC);



ALTER TABLE REVIEW
	ADD CONSTRAINT  PK_REVIEW PRIMARY KEY (REVIEW_NUM);



CREATE TABLE SCHEDULE
(
	MOVIE_NUM            NUMBER(8) NOT NULL ,
	SCHEDULE_NUM         NUMBER(8) NOT NULL ,
	ROOM_NUM             NUMBER(8) NOT NULL ,
	SCRN_DATE            DATE NOT NULL ,
	START_TIME           DATE NOT NULL ,
	RESIDUAL_SEAT        NUMBER(10) NOT NULL 
);



CREATE UNIQUE INDEX PK_SCHEDULE ON SCHEDULE
(SCHEDULE_NUM   ASC);



ALTER TABLE SCHEDULE
	ADD CONSTRAINT  PK_SCHEDULE PRIMARY KEY (SCHEDULE_NUM);



CREATE TABLE SCRN_ROOM
(
	ROOM_NUM             NUMBER(8) NOT NULL ,
	ROOM_NAME            VARCHAR2(32) NOT NULL ,
	TOTAL_SEAT_CAP       NUMBER(10) NOT NULL ,
	ROW_NUM              NUMBER(10) NOT NULL ,
	COL_NUM              NUMBER(10) NOT NULL 
);



CREATE UNIQUE INDEX PK_SCRN_ROOM ON SCRN_ROOM
(ROOM_NUM   ASC);



ALTER TABLE SCRN_ROOM
	ADD CONSTRAINT  PK_SCRN_ROOM PRIMARY KEY (ROOM_NUM);



CREATE TABLE SEAT
(
	SEAT_NUM             CHAR(3) NOT NULL ,
	SEAT_RATING_CODE     NUMBER(5) DEFAULT  0  NOT NULL ,
	ROOM_NUM             NUMBER(8) NOT NULL 
);



CREATE UNIQUE INDEX PK_SEAT ON SEAT
(SEAT_NUM   ASC,ROOM_NUM   ASC);



ALTER TABLE SEAT
	ADD CONSTRAINT  PK_SEAT PRIMARY KEY (SEAT_NUM,ROOM_NUM);



CREATE TABLE SEAT_RATING
(
	SEAT_RATING_CODE     NUMBER(5) NOT NULL ,
	SEAT_RATING_NAME     VARCHAR2(32) NOT NULL ,
	SEAT_PRICE           NUMBER(3) NOT NULL 
);



CREATE UNIQUE INDEX PK_SEAT_RATING ON SEAT_RATING
(SEAT_RATING_CODE   ASC);



ALTER TABLE SEAT_RATING
	ADD CONSTRAINT  PK_SEAT_RATING PRIMARY KEY (SEAT_RATING_CODE);



CREATE TABLE TICKET
(
	SCHEDULE_NUM         NUMBER(8) NOT NULL ,
	SEAT_NUM             CHAR(3) NOT NULL ,
	TICKET_NUM           NUMBER(8) NOT NULL ,
	RESERVE_NUM          NUMBER(8) NOT NULL ,
	ROOM_NUM             NUMBER(8) NOT NULL ,
	SEAT_PRICE           NUMBER(8) NOT NULL ,
	SCRN_TIME            NUMBER(8) NOT NULL 
);



CREATE UNIQUE INDEX PK_TICKET ON TICKET
(TICKET_NUM   ASC);



ALTER TABLE TICKET
	ADD CONSTRAINT  PK_TICKET PRIMARY KEY (TICKET_NUM);



CREATE TABLE TRAILER_SHOT
(
	MOVIE_NUM            NUMBER(8) NOT NULL ,
	TRAILER_SHOT_NUM     NUMBER(8) NOT NULL ,
	TRAILER_SHOT_ROUTE   VARCHAR2(100) NOT NULL 
);



CREATE UNIQUE INDEX PK_TRAILER_SHOT ON TRAILER_SHOT
(TRAILER_SHOT_NUM   ASC);



ALTER TABLE TRAILER_SHOT
	ADD CONSTRAINT  PK_TRAILER_SHOT PRIMARY KEY (TRAILER_SHOT_NUM);



CREATE TABLE TRAILER_VIDEO
(
	MOVIE_NUM            NUMBER(8) NOT NULL ,
	TRAILER_VIDEO_NUM    NUMBER(8) NOT NULL ,
	TRAILER_VIDEO_ROUTE  VARCHAR2(100) NOT NULL 
);



CREATE UNIQUE INDEX PK_TRAILER_VIDEO ON TRAILER_VIDEO
(TRAILER_VIDEO_NUM   ASC);



ALTER TABLE TRAILER_VIDEO
	ADD CONSTRAINT  PK_TRAILER_VIDEO PRIMARY KEY (TRAILER_VIDEO_NUM);



CREATE TABLE VISIT_INFO
(
	ROOM_NUM             NUMBER(8) NOT NULL ,
	VISIT_NUM            NUMBER(8) NOT NULL ,
	VISIT_NAME           VARCHAR2(32) NOT NULL ,
	VISIT_CONTACT        CHAR(13) DEFAULT  '010-0000-0000'  NOT NULL ,
	VISIT_TIME           DATE NOT NULL 
);



CREATE UNIQUE INDEX PK_VISIT_INFO ON VISIT_INFO
(VISIT_NUM   ASC);



ALTER TABLE VISIT_INFO
	ADD CONSTRAINT  PK_VISIT_INFO PRIMARY KEY (VISIT_NUM);



ALTER TABLE CS
	ADD (CONSTRAINT I_CS_CS_CLASSIFY_CODE FOREIGN KEY (CS_CLASSIFY_CODE) REFERENCES CODE (COMMON_CODE) ON DELETE SET NULL);



ALTER TABLE EMC_EXIT
	ADD (CONSTRAINT I_EMC_EXIT_ROOM_NUM FOREIGN KEY (ROOM_NUM) REFERENCES SCRN_ROOM (ROOM_NUM));



ALTER TABLE EMC_EXIT
	ADD (CONSTRAINT I_EMC_EXIT_EMC_LOC_CODE FOREIGN KEY (EMC_LOC_CODE) REFERENCES CODE (COMMON_CODE));



ALTER TABLE EMP
	ADD (CONSTRAINT I_EMP_DEPT_NUM FOREIGN KEY (DEPT_NUM) REFERENCES DEPT (DEPT_NUM));



ALTER TABLE MEM
	ADD (CONSTRAINT I_MEM_CS_NUM FOREIGN KEY (CS_NUM) REFERENCES CS (CS_NUM));



ALTER TABLE MOVIE
	ADD (CONSTRAINT I_MOVIE_MOVIE_RATING_CODE FOREIGN KEY (MOVIE_RATING_CODE) REFERENCES CODE (COMMON_CODE) ON DELETE SET NULL);



ALTER TABLE PAY_BANKLESS
	ADD (CONSTRAINT I_PAY_BANKLESS_PAYMENT_NUM FOREIGN KEY (PAYMENT_NUM) REFERENCES PAYMENT (PAYMENT_NUM));



ALTER TABLE PAY_CARD
	ADD (CONSTRAINT I_PAY_CARD_PAYMENT_NUM FOREIGN KEY (PAYMENT_NUM) REFERENCES PAYMENT (PAYMENT_NUM));



ALTER TABLE PAYMENT
	ADD (CONSTRAINT I_PAYMENT_RESERVE_NUM FOREIGN KEY (RESERVE_NUM) REFERENCES RESERVE (RESERVE_NUM));



ALTER TABLE PAYMENT
	ADD (CONSTRAINT I_PAYMENT_CS_NUM FOREIGN KEY (CS_NUM) REFERENCES CS (CS_NUM));



ALTER TABLE PAYMENT
	ADD (CONSTRAINT I_PAYMENT_DC_CODE FOREIGN KEY (DC_CODE) REFERENCES DC (DC_CODE) ON DELETE SET NULL);



ALTER TABLE PAYMENT
	ADD (CONSTRAINT I_PAYMENT_PAYMENT_OPT_CODE FOREIGN KEY (PAYMENT_OPT_CODE) REFERENCES CODE (COMMON_CODE) ON DELETE SET NULL);



ALTER TABLE REVIEW
	ADD (CONSTRAINT I_REVIEW_MOVIE_NUM FOREIGN KEY (MOVIE_NUM) REFERENCES MOVIE (MOVIE_NUM));



ALTER TABLE REVIEW
	ADD (CONSTRAINT I_REVIEW_MEM_NUM FOREIGN KEY (MEM_NUM) REFERENCES MEM (MEM_NUM));



ALTER TABLE SCHEDULE
	ADD (CONSTRAINT I_SCHEDULE_MOVIE_NUM FOREIGN KEY (MOVIE_NUM) REFERENCES MOVIE (MOVIE_NUM));



ALTER TABLE SCHEDULE
	ADD (CONSTRAINT I_SCHEDULE_ROOM_NUM FOREIGN KEY (ROOM_NUM) REFERENCES SCRN_ROOM (ROOM_NUM));



ALTER TABLE SEAT
	ADD (CONSTRAINT I_SEAT_SEAT_RATING_CODE FOREIGN KEY (SEAT_RATING_CODE) REFERENCES SEAT_RATING (SEAT_RATING_CODE));



ALTER TABLE SEAT
	ADD (CONSTRAINT I_SEAT_ROOM_NUM FOREIGN KEY (ROOM_NUM) REFERENCES SCRN_ROOM (ROOM_NUM));



ALTER TABLE TICKET
	ADD (CONSTRAINT I_TICKET_SCHEDULE_NUM FOREIGN KEY (SCHEDULE_NUM) REFERENCES SCHEDULE (SCHEDULE_NUM));



ALTER TABLE TICKET
	ADD (CONSTRAINT I_TICKET_SEAT_NUM_ROOM_NUM FOREIGN KEY (SEAT_NUM, ROOM_NUM) REFERENCES SEAT (SEAT_NUM, ROOM_NUM));



ALTER TABLE TICKET
	ADD (CONSTRAINT I_TICKET_RESERVE_NUM FOREIGN KEY (RESERVE_NUM) REFERENCES RESERVE (RESERVE_NUM));



ALTER TABLE TRAILER_SHOT
	ADD (CONSTRAINT I_TRAILER_SHOT_MOVIE_NUM FOREIGN KEY (MOVIE_NUM) REFERENCES MOVIE (MOVIE_NUM));



ALTER TABLE TRAILER_VIDEO
	ADD (CONSTRAINT I_TRAILER_VIDEO_MOVIE_NUM FOREIGN KEY (MOVIE_NUM) REFERENCES MOVIE (MOVIE_NUM));



ALTER TABLE VISIT_INFO
	ADD (CONSTRAINT I_VISIT_INFO_ROOM_NUM FOREIGN KEY (ROOM_NUM) REFERENCES SCRN_ROOM (ROOM_NUM));


CREATE SEQUENCE CS_NUM START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE DEPT_NUM             START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE EMC_NUM              START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE EMP_NUM              START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE MEM_NUM              START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE MOVIE_NUM            START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE PAYMENT_NUM          START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE RESERVE_NUM          START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE REVIEW_NUM           START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SCHEDULE_NUM         START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE ROOM_NUM             START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE TICKET_NUM           START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE TRAILER_SHOT_NUM     START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE TRAILER_VIDEO_NUM    START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE VISIT_NUM            START WITH 1 INCREMENT BY 1;