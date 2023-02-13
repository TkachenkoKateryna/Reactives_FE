import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import { useParams } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";

const ProfilePage = () => {
  const { userName } = useParams<{ userName: string }>();
  const { profileStore } = useStore();
  const { loadProfile, profile } = profileStore;

  useEffect(() => {
    loadProfile(userName!);
  }, [loadProfile, userName]);

  return (
    <Grid>
      <Grid.Column width={16}>
        {profile && (
          <>
            <ProfileHeader profile={profile} />
            <ProfileContent profile={profile} />
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ProfilePage);
