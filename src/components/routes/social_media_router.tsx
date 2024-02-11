import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { NotFound } from '../not_found/not_found';
import TwitterLayout from '../layouts/twitter_layouts';
import { Login } from '../pages/auth/login';
import { LogOut } from '../pages/auth/logout';
import { Notification } from '../pages/notification/notification';
import { Profile } from '../pages/profile/profile';
import { Messages } from '../pages/messages/messages';
import { Post } from '../pages/post/post';
import { Settings } from '../pages/settings/settings';

const SocialMediaRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<TwitterLayout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Login />} />
      <Route path="login" element={<LogOut />} />
      <Route path="notifications" element={<Notification />}>
        <Route path="verified" element={<Notification />} />
        <Route path="mentions" element={<Notification />} />
      </Route>
      <Route path="userName" element={<Profile />}>
        <Route path="with_replies" element={<Profile />} />
        <Route path="highlights" element={<Profile />} />
        <Route path="media" element={<Profile />} />
        <Route path="likes" element={<Profile />} />
        <Route path="status/:postId" element={<Profile />} />
        <Route path="photo" element={<Profile />} />
      </Route>
      <Route path="messages" element={<Messages />}>
        <Route path="compose" element={<Messages />} />
      </Route>
      <Route path="settings/account" element={<Settings />} />
      <Route path="compose/tweet" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default SocialMediaRouter;
