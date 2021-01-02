export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type CameraParamList = {
  TabOneScreen: undefined;
};

export type ChatsParamList = {
  TabTwoScreen: undefined;
};

export type StatusParamList = {
  TabTwoScreen: undefined;
};

export type CallsParamList = {
  TabTwoScreen: undefined;
};

export type User={
	id: String;
	name: String;
	imageUri: String;
};

export type Message ={
	id: String;
	content: String;
	createdAt: String;
  user: User;
};

export type ChatRoom={
 id: String;
 users: User[];
 lastMessage: Message;
};
