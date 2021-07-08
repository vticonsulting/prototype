
# This talk
<!-- https://slides.com/marionebl/the-perks-of-committing-with-conventions#/30 -->

- Issues with commit -m
- The conventional commit format
- Use commit messages for project automation
- Stay consistent with commitlint

<!--
The perks of committing with conventions

git is an awesome tool to keep around the history of your project. It asks one small thing in return, though: A commit message. Let's talk about how we can make better use of git by adopting commit conventions and the resulting opportunities for project automation. We'll also explore tools that help you to adhere and make the most of your glorious new commit style.
-->



# git commit basically is

`<textarea required>`



<!--
Here is the thing: git commit is like an HTML textarea with the  required attribute set.

Our brains parse this as "put anything here to make this work".

At the same time we and our brain tend to be very very lazy.

So we write very short commit messages.
-->

---

# git commit -m "fix"

<!--

Now, who has ever used this commit message in his projects.

Please raise your hand

I know I certainly have.

-->

---

# git commit -m "updated"

---

# git commit -m "clean up"

<!--
The issue with those commit messages arises over time.

What you can see here is a git history excerpt of the patternplate project.

Not very useful. That is 2015 me being rude to 2017 me.
 -->


<!--

I don't blame 2015 me too much, though.

Committing sensibly is hard, just as filling a blank textarea is.

 -->
