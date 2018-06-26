<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'app',
    data (): any {
      return {
      }
    },
  }


</script>

<style lang="scss">
  /**
   * Import CSS dependencies
   */
   
  // Bulma depends on MDI, but do not contains them so so I have to import them separately
  @import url("http://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css");

  /**
   * Rewriting Bulma default settings (set primary colors as blue)
   * and add social media colors (FB, Twitter, YT, LinkedIn, GitHub)
   */

  // Import Bulma's core
  @import '~bulma/sass/utilities/_all';

  // Rewrite primary color
  $primary: $blue;
  $primary-invert: findColorInvert($primary);

  // Link colors
  $link: $primary;
  $link-invert: $blue-invert;
  $link-visited: $purple;

  $link-hover: $grey-darker;
  $link-hover-border: $grey-light;

  $link-focus: $grey-darker;
  $link-focus-border: $blue;

  $link-active: $grey-darker;
  $link-active-border: $grey-dark;

  // Social media colors
  $facebook: $blue; // #3b5998
  $twitter: $info; // #4099ff
  $youtube: $red; // #ff0000
  $linkedin: $blue; // #007bb5
  $github: $dark; // $white

  $facebook-invert: findColorInvert($facebook);
  $twitter-invert: findColorInvert($twitter);
  $youtube-invert: findColorInvert($youtube);
  $linkedin-invert: findColorInvert($linkedin);
  $github-invert: findColorInvert($github);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "link": ($link, $link-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    'twitter': ($twitter, $twitter-invert),
    'facebook': ($facebook, $facebook-invert),
    'youtube': ($youtube, $youtube-invert),
    'linkedin': ($linkedin, $linkedin-invert),
    'github': ($github, $github-invert)
  );

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  /**
   * Dropdown login
   */

  .dropdown-login {
    .columns.is-vcentered {
      margin-bottom: 0;
      margin-top: -10px;
    }

    .modal-card-body {
      padding-bottom: 0;
      padding-top: 13px;
    }
  }

</style>
