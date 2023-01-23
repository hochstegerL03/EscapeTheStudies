create database EtS_Database;
-- Tabellen
create table UserInformation
(
UserID integer not null,
Email varchar,
Username varchar,
password varchar
);

create table Course
(
CourseID integer not null,
Title varchar,
Description varchar,
Summary varchar,
IsFavourite bool
);

create table News
(
NewsID integer,
CourseID integer,
Title varchar,
Description varchar
);

create table Chapter
(
ChapterID integer not null,
CourseID integer not null,
Title varchar,
Story varchar,
Lection varchar
);

create table Question
(
QuestionID integer not null,
ChapterID integer not null,
Question varchar
);

create table Answer 
(
AnswerID integer not null,
QuestionID integer not null,
Answer varchar,
Correct boolean
);

create table EscapeRoom
(
ERID integer not null,
CourseID integer not null,
Message varchar
);

create table Room
(
RoomID integer not null,
ERID integer not null,
RoomPosition varchar,
RoomImage varchar
);

create table Item
(
ItemID integer not null,
Title varchar,
ItemPosition varchar,
Icon varchar,
ItemImage varchar
);

create table Challenge
(
ItemID integer not null,
QuestionID integer not null
);

create table Collectable
(
ItemID integer not null,
Description varchar
);

create table Tag
(
TagID integer,
LastName varchar,
Description varchar
);

create table Status
(
StatusID integer not null,
Statusname varchar
);

create table Globalinformation
(
GlobalID integer not null,
SmartPeople integer,
ArsonCommitted integer,
CookiesCollected integer
);

create table Tag_Course
(
TagID integer not null,
CourseID integer not null
);

create table Room_Item
(
RoomID integer not null,
ItemID integer not null
);

create table UserErledigtChallenge
(
UserID integer not null,
ItemID integer not null,
QuestionID integer not null,
StatusID integer not null,
TimeInformation Date not null
);

create table UserErledigtCollectable
(
UserID integer not null,
ItemID integer not null,
StatusID integer not null,
TimeInformation Date not null
);

-- Keys

alter table UserInformation add constraint pk_UserInformation primary key (UserID);

alter table Course add constraint pk_Course primary key (CourseID);

alter table Tag add constraint pk_Tag primary key (TagID);

alter table Tag_Course add constraint pk_Tag_Course primary key (TagID,
CourseID);

alter table Chapter add constraint pk_Chapter primary key (ChapterID);

alter table Question add constraint pk_Question primary key (QuestionID);

alter table Answer add constraint pk_Answer primary key (AnswerID);

alter table News add constraint pk_News primary key (NewsID);

alter table EscapeRoom add constraint pk_EscapeRoom primary key (ERID);

alter table Room add constraint pk_Room primary key (RoomID);

alter table Item add constraint pk_Item primary key (ItemID);

alter table Room_Item add constraint pk_Room_Item primary key (RoomID,
ItemID);

alter table Challenge add constraint pk_Challenge primary key (ItemID);

alter table Collectable add constraint pk_Collectable primary key (ItemID);

alter table Status add constraint pk_Status primary key (StatusID);

alter table UserErledigtChallenge add constraint pk_UserErledigtChallenge primary key (UserID,
ItemID);

alter table UserErledigtCollectable add constraint pk_UserErledigtCollectable primary key (UserID,
ItemID);


alter table EscapeRoom add constraint fk_EscapeRoom_Course foreign key (CourseID) references Course(CourseID);

alter table Room add constraint fk_Room_EscapeRoom foreign key (ERID) references EscapeRoom(ERID);

alter table Chapter add constraint fk_Chapter_Course foreign key (CourseID) references Course(CourseID);

alter table Question add constraint fk_Question_Chapter foreign key (ChapterID) references Chapter(ChapterID);

alter table Answer add constraint fk_Answer_Question foreign key (QuestionID) references Question(QuestionID);

alter table Challenge add constraint fk_Question_Challenge foreign key (QuestionID) references Question(QuestionID);

alter table Room_Item add constraint fk_Room_Item_Roomref foreign key (RoomID) references Room(RoomID);

alter table Room_Item add constraint fk_Room_Item_Itemref foreign key (ItemID) references Item(ItemID);

alter table Tag_Course add constraint fk_Tag_Course_Tagref foreign key (TagID) references Tag(TagID);

alter table Tag_Course add constraint fk_Tag_Course_Courseref foreign key (CourseID) references Course(CourseID);

alter table UserErledigtChallenge add constraint pk_UserErledigtChallenge_statusref foreign key (StatusID) references Status(StatusID);

alter table UserErledigtCollectable add constraint UserErledigtCollectable_statusref foreign key (StatusID) references Status(StatusID);

alter table UserErledigtChallenge add constraint pk_UserErledigtChallenge_userref foreign key (UserID) references UserInformation(UserID);

alter table UserErledigtCollectable add constraint UserErledigtCollectable_userref foreign key (UserID) references UserInformation(UserID);

alter table UserErledigtChallenge add constraint pk_UserErledigtChallenge_questionref foreign key (QuestionID) references Question(QuestionID);

-- users with settings

create role users;

create role usersadmin with createrole in role users;

create user dummyuser in role users password 'notsosave%password$foruserd<=?dummy/';

create user superadmin in role usersadmin password 'notsosave%password$forsuper>=!admin/';

grant
select
	on
	question,
	course,
	chapter to users;

grant
select
	,
	insert
	,
	delete
	,
	update
	on
	all tables in schema public to usersadmin with grant option;
'2021-12-15');