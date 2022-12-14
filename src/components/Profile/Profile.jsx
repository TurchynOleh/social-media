import React from 'react';
import MyPosts from './myPosts/myPosts';
import ProfileHeader from './profileHeader/profileHeader';

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
}

export default Profile;
