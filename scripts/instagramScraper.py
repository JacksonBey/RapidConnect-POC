import instaloader
import json
from fastapi import FastAPI

app = FastAPI()

def get_instagram_profile_data(username):
    L = instaloader.Instaloader()

    try:
        profile = instaloader.Profile.from_username(L.context, username)
    except instaloader.exceptions.ProfileNotExistsException:
        return {
            "error": f"Profile '{username}' does not exist."
        }

    profile_data = {
        "username": profile.username,
        "bio": profile.biography,
        "recent_posts": []
    }

    post_counter = 0
    for post in profile.get_posts():
        if post_counter >= 5:
            break

        post_data = {
            "url": post.url,
            "likes": post.likes,
            "comments": [],
            "caption": post.caption
        }

        comments = list(post.get_comments())
        if comments:
            post_data["comments"].append(comments[0].text)

        profile_data["recent_posts"].append(post_data)
        post_counter += 1

    return profile_data


@app.get("/instagram/{username}")
def get_instagram_profile(username: str):
    profile_data = get_instagram_profile_data(username)
    prettified_data = json.dumps(profile_data, indent=4)
    return prettified_data
