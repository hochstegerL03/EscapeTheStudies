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

alter table Globalinformation add constraint pk_Globalinformation primary key (GlobalID);

alter table News add constraint fk_News_Course foreign key (CourseID) references Course(CourseID);

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
-- Inserts
insert
	into
	Userinformation (Userid,
	Email,
	Username,
	password)
values (1,
'max.musterman@gmail.com',
'MaxMusterman',
'Test123');

insert
	into
	Userinformation (Userid,
	Email,
	Username,
	password)
values (2,
'willy.white@gmail.com',
'Willwhy',
'Secured');

insert
	into
	Userinformation (Userid,
	Email,
	Username,
	password)
values (3,
'dagboert.reichtum@gmail.com',
'Richy',
'notApassword');

insert
	into
	Userinformation (Userid,
	Email,
	Username,
	password)
values (4,
'chris.heisenberg@gmail.com',
'ChrisH',
'whatever');

insert
	into
	Userinformation (Userid,
	Email,
	Username,
	password)
values (5,
'ludwig.leberman@gmail.com',
'LL',
'NotSave');

insert
	into
	Course (CourseID,
	Title,
	Description,
	Summary,
	IsFavourite)
values (1,
'WebDevelopmentTest',
'Learn Webprogramming cool',
'Webthings',
false);

insert
	into
	Course (CourseID,
	Title,
	Description,
	Summary,
	IsFavourite)
values (2,
'Clientprogramming',
'Learn how to client',
'Clienthings',
true);

insert
	into
	News (NewsID,
	CourseID,
	Title,
	Description)
values (1,
2,
'WCF',
'New Communication with less code');

insert
	into
	Chapter (ChapterID,
	CourseID,
	Title,
	Story,
	Lection)
values (1,
1,
'Amazing Work',
'Borwing',
'Not Lorem Ipsum');

insert
	into
	Chapter (ChapterID,
	CourseID,
	Title,
	Story,
	Lection)
values (2,
1,
'Fresh',
'Interesting',
'Lorem Ipsum');

insert
	into
	Chapter (ChapterID,
	CourseID,
	Title,
	Story,
	Lection)
values (3,
2,
'Old but Gold',
'Everything',
'Ipsum Lorem');

insert
	into
	Question (QuestionID,
	ChapterID,
	Question)
values (1,
1,
'What is going on ?');

insert
	into
	Question (QuestionID,
	ChapterID,
	Question)
values (2,
2,
'How cool is it ?');

insert
	into
	Question (QuestionID,
	ChapterID,
	Question)
values (3,
2,
'Who is the best ?');

insert
	into
	Answer (AnswerID,
	QuestionID,
	Answer,
	Correct)
values (1,
1,
'Something;Anything', 
true);

insert
	into
	Answer (AnswerID,
	QuestionID,
	Answer,
	Correct)
values (2,
2,
'Pretty Cool', 
false);

insert
	into
	Answer (AnswerID,
	QuestionID,
	Answer,
	Correct)
values (3,
3,
'Doky', 
false);

insert
	into
	EscapeRoom (ERID,
	CourseID,
	Message)
values (1,
1,
'Lets have fun');

insert
	into
	EscapeRoom (ERID,
	CourseID,
	Message)
values (2,
2,
'The grind begins now');

insert
	into
	Room (RoomID,
	ERID,
	RoomPosition,
	RoomImage)
values (1,
1,
'Living Room',
'Arrow');

insert
	into
	Room (RoomID,
	ERID,
	RoomPosition,
	RoomImage)
values (2,
1,
'Bathroom',
'Spiral');

insert
	into
	Room (RoomID,
	ERID,
	RoomPosition,
	RoomImage)
values (3,
1,
'Kitchen',
'Square');

insert
	into
	Room (RoomID,
	ERID,
	RoomPosition,
	RoomImage)
values (4,
2,
'Basement',
'Triangle');

insert
	into
	Room (RoomID,
	ERID,
	RoomPosition,
	RoomImage)
values (5,
2,
'Garage',
'Circle');

insert
	into
	Item (ItemID,
	Title,
	ItemPosition,
	Icon,
	ItemImage)
values (1,
'Something',
'Toilet',
'Anything',
'Arrowhere');

insert
	into
	Item (ItemID,
	Title,
	ItemPosition,
	Icon,
	ItemImage)
values (2,
'Something new',
'Car',
'Anything new',
'Circlehere');

insert
	into
	Item (ItemID,
	Title)
values (3,
'Is it Real ?');

insert
	into
	Item (ItemID,
	Title)
values (4,
'What is Happening ?');

insert
	into
	Challenge (ItemID,
	QuestionID)
values (3,
2);

insert
	into
	Challenge (ItemID,
	QuestionID)
values (4,
3);

insert
	into
	Collectable (ItemID ,
	Description)
values (1,
'Somwhere where you always go and it is never dark');

insert
	into
	Collectable (ItemID,
	Description)
values (2,
'Lorem ipsum and Ipsum lorem');

insert
	into
	Tag (TagID,
	LastName,
	Description)
values (1,
'LOL',
'Cool');

insert
	into
	Tag (TagID,
	LastName,
	Description)
values (2,
'LMAO',
'What is that');

insert
	into
	Tag (TagID,
	LastName,
	Description)
values (3,
'Not LOL',
'Sadge');

insert
	into
	Status (StatusID,
	Statusname)
values (1,
'Not Started yet');

insert
	into
	Status (StatusID,
	Statusname)
values (2,
'In Progress ...');

insert
	into
	Status (StatusID,
	Statusname)
values (3,
'Finished');

insert
	into
	Globalinformation (GlobalID,
	SmartPeople,
	ArsonCommitted,
	CookiesCollected)
values (1,
1,
2,
5);

insert
	into
	Globalinformation (GlobalID,
	SmartPeople,
	ArsonCommitted,
	CookiesCollected)
values (2,
10,
5,
25);

insert
	into
	Tag_Course (TagID,
	CourseID)
values (1,
1);

insert
	into
	Tag_Course (TagID,
	CourseID)
values (2,
1);

insert
	into
	Tag_Course (TagID,
	CourseID)
values (3,
2);

insert
	into
	Tag_Course (TagID,
	CourseID)
values (1,
2);

insert
	into
	Room_Item (RoomID,
	ItemID)
values (3,
1);

insert
	into
	Room_Item (RoomID,
	ItemID)
values (4,
2);

insert
	into
	Room_Item (RoomID,
	ItemID)
values (5,
1);

insert
	into
	Room_Item (RoomID,
	ItemID)
values (1,
2);

insert
	into
	Room_Item (RoomID,
	ItemID)
values (5,
2);

insert
	into
	UserErledigtChallenge (UserID,
	ItemID,
	QuestionID,
	StatusID,
	TimeInformation)
values (1,
3,
2,
1,
'2020-02-20');

insert
	into
	UserErledigtChallenge (UserID,
	ItemID,
	QuestionID,
	StatusID,
	TimeInformation)
values (4,
4,
2,
3,
'2020-05-08');

insert
	into
	UserErledigtCollectable (UserID,
	ItemID,
	StatusID,
	TimeInformation)
values (3,
1,
2,
'2022-09-29');

insert
	into
	UserErledigtCollectable (UserID,
	ItemID,
	StatusID,
	TimeInformation)
values (2,
2,
3,
'2021-12-15');