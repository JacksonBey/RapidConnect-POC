import instaloader
import json

def get_instagram_profile_data(username):
    L = instaloader.Instaloader()

    try:
        profile = instaloader.Profile.from_username(L.context, username)
    except instaloader.exceptions.ProfileNotExistsException:
        print(f"Profile '{username}' does not exist.")
        return None

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
            "comments": post.comments,
            "caption": post.caption
        }
        profile_data["recent_posts"].append(post_data)
        post_counter += 1

    return profile_data


if __name__ == "__main__":
    username = "felipepavaniofficial"
    profile_data = get_instagram_profile_data(username)
    prettified_data = json.dumps(profile_data, indent=4)
    print(prettified_data)