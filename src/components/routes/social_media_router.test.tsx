import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render } from "../../utils/test-utils";

import TwitterLayout from "../layouts/twitter_layouts";
import { Home } from "../pages/home/home";
import { Login } from "../pages/auth/login";
import { LogOut } from "../pages/auth/logout";
import { Profile } from "../pages/profile/profile";
import { Messages } from "../pages/messages/messages";
import { Settings } from "../pages/settings/settings";
import { Post } from "../post/post";
import { NotFound } from "../not_found/not_found";
import { Notification } from '../pages/notification/notification';

describe("renders correctly", () => {
    it("check to show error page on nonexisting page", () => {
        const { getByText } =  render(
            <MemoryRouter initialEntries={["/testing"]}>
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
            </MemoryRouter>
          );

          expect(getByText(/Page Not Found/)).toBeDefined()
    });
})