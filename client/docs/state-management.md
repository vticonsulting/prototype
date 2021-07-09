# When should I use a Store

A store should contain data that can be accessed throughout your application.

This includes data that is used in many places

For example...

- User information that is displayed in the navbar
- as well as data that needs to be preserved through pages
  - e.g. a very complicated multi-step form.

On the other hand, you should avoid including in the store local data that could be hosted in a component instead, e.g. the visibility of an element local to a page.

<!--
Not all applications need access to a global state, but if yours need one, Pinia will make your life easier.
 -->
