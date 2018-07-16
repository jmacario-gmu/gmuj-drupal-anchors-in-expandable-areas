# HTML Anchors in Expandable Areas Functionality

**This JavaScript/jQuery script provides functionality in cases where an HTML anchor tags on a webpage is situated within an expandable content area which is closed by default.**

**This script is intended for use on Mason Drupal Platform websites, but may also work with minor modification on other websites.** 

## The Problem

When a link is provided to an HTML anchor within a page, if the HTML anchor tag is situated within an expandable content area which defaults to closed, the browser doesn’t automatically move to the anchor, nor is there is an automatic mechanism to open the relevant expandable area.

[Link showing default functionality](https://drupaltraining.gmu.edu/anchors-expandables-original#anchor2)

## The Solution

This script performs the following procedure:

1. Check for the presence of a named anchor in the URL.
2. If an anchor is found in the URL, check for a corresponding named anchor within the web page.
3. If a corresponding named anchor is found within the web page, identify and opens the expandable content area containing the anchor, if any.
4. Scroll to the location of the anchor (minus a few pixels to account for the menu bar).

[Link to working example](https://drupaltraining.gmu.edu/anchors-expandables#anchor2)

## More Information
[masonanalytics.gmu.edu: Using GTM to Add Website Functionality: Anchors in Expandable Areas](https://masonanalytics.gmu.edu/2018/02/28/using-gtm-to-add-website-functionality-anchors-in-expandable-areas/)


