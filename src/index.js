import $ from 'jquery';
import './index.css';
import './store.js';
import cuid from 'cuid';

'use strict';

const bookmarks = [];

function generateBookmarkElement(bookmark, bookmarkIndex, template) {
  return `<div bookmark-id="${bookmark.id}"class="flexbox"><div class="title"><h2>${bookmark.title}
  </h2><p>Star rating: ${bookmark.rating}</p.></div>
  <button type="button" class="js-bookmark-launch">
  <a target="_blank" href="${bookmark.url}">Launch</a>
  </button><form id="details"><button type="button">Details</button></form>
  </div> <button type="button">Edit</button>
  <button type="button">Delete</button>
  <hr><div id="overflow"><h3>url:</h3><p>${bookmark.description}</p></div>`;
}

function generateBookmarksString(bookmarkslist) {
  console.log('`Generating Bookmark element` ran');
  const bookmarkitem = bookmarks.map((bookmark, index) => generateBookmarkElement(bookmark, index));
  return bookmarkitem.join("");
}

function renderBookmarks() {
  // this function will be responsible for rendering the bookmark in
  // the DOM
  console.log('`renderBookmarks` ran');
  const BookmarksBookmarkString = generateBookmarksString(bookmarks)
  //insert html to dom
  $('.js-bookmark-list').html(BookmarksBookmarkString);
}

function handleNewBookmarkSubmit() {
  // this function will be responsible for when users adds a new bookmark
  $('#form1').submit(function (event) {
    event.preventDefault();
    const newBookmark = {};
    newBookmark.title = $('.js-bookmark-title').val();
    newBookmark.url = $('.js-bookmark-url').val();
    newBookmark.description = $('.js-bookmark-description').val();
    newBookmark.rating = $('.js-bookmark-rating').val();
    newBookmark.id = cuid();
    newBookmark.toggle = false;
    $('.js-bookmark-title').val('');
    $('.js-bookmark-url').val('');
    $('.js-bookmark-description').val('');
    $('.js-bookmark-rating').val('1');

    // addBookmarktoBookmarkslist(newBookmark);
    bookmarks.push(newBookmark)
    // addBookmarktoBookmarkslist(newBookmark);
    renderBookmarks();
    console.log(bookmarks)
  });
  
}


function handleDeleteBookmarkClicked(id) {
  
  
  //this will be responsible for deleting a bookmark when click delete
  console.log('`handleDeleteBookmarkClicked` ran')
}

function handleBookmarksort() {
  //responsible for displaying bookmarks when star value equals to the user input
  console.log('`handleBookmarksort` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleBookmark() {
  handleBookmarksort();
  renderBookmarks();
  handleNewBookmarkSubmit();
  handleDeleteBookmarkClicked();
}


// when the page loads, call `handleShoppingList`
$(handleBookmark);


// function main() {

//   console.log('DOM is loaded');

//   const startMsg = $('<p>Webpack is working!</p>');
//   $('#root').append(startMsg);
// }



// $(main);