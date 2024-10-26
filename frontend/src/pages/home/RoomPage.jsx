import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  const { username, roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 2123835881;
    const serverSecret = '016b5c65c463bc994559ea12572dbde9';
    const kitoken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      username
    );

    const zego = ZegoUIKitPrebuilt.create(kitoken);
    zego.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
        screen: ZegoUIKitPrebuilt.ScreenSharing,
      },
      showUserName: true,
      showLeavingView: true,
      showRemoveUserButton: true,
      showScreenSharingButton: true,
    });
  };

  return (
    <div
      ref={myMeeting}
      className="fixed inset-0 w-screen h-screen bg-black"
    />
  );
};

export default RoomPage;
