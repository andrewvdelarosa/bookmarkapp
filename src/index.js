import $ from 'jquery';
import './index.css';
import './store.js';
import cuid from 'cuid';


'use strict';

const bookmarks = [];

function generateBookmarkElement(bookmark, bookmarkIndex, template) {
  return `<li data-bookmark-id="${bookmark.id}>
  <div"class="flexbox">
  
  <div class="title"><h2>${bookmark.title}</h2>
  
  <p>Star rating: ${bookmark.rating}</p>
  <p>${bookmark.description}</p>
  <p>url: ${bookmark.url}</p></div>


  <button type="button" class="js-bookmark-launch">
  <a target="_blank" href="${bookmark.url}">Launch</a></form>


  </div> <button type="button">Edit</button>

  <button id="js-bookmark-delete" type="button">Delete</button></li>`;
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

function closebuttonclick(){
  $("#form1").on("click", ".close", function (){
    $("#form1").slideToggle("slow");
  })
  console.log("`closebuttonclick`ran")
}


function addbuttonclick(){
  $(".addbookmark").on("click",".add",function () {
    $("#form1").slideToggle("slow");
  });
  console.log("`addbutonclick`ran")
}

function getBookmarkIdFromElement(bookmark) {
  console.log("`getBookmarkIdFromElement`ran")
  return $(bookmark)
    .closest('li')
    .data('bookmark-id');
    
}

function deleteListItem(itemId) {
  console.log(`Deleting item with id  ${itemId} from shopping list`)
  const itemIndex = bookmarks.findIndex(item => item.id === itemId);
  bookmarks.splice(itemIndex, 1);
  console.log("`deleteListItem`ran")
}

function handleDeleteBookmarkClicked() {
  $('.js-bookmark-list').on("click","#js-bookmark-delete",function(event){
    const itemId = getBookmarkIdFromElement(event.currentTarget);
    // delete the item
    deleteListItem(itemId);
    // render the updated shopping list
    renderBookmarks();
    //get element id

    //find element in bookmark array by id

    //delete object in array

    //rerender
    console.log("`handledeletebookmarkclicked`ran")

  })
  
  //this will be responsible for deleting a bookmark when click delete
}

function handleBookmarkfilter() {

  //event listener

  //what i want to add

  //get value of rating

  //filter bookmark array 

  //render

  //responsible for displaying bookmarks when star value equals to the user input
  console.log('`handleBookmarksort` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleBookmark() {
  renderBookmarks();
  handleNewBookmarkSubmit();
  handleDeleteBookmarkClicked();
  addbuttonclick();
  closebuttonclick();
  getBookmarkIdFromElement();
}


// when the page loads, call `handleShoppingList`
$(handleBookmark);


// function main() {

//   console.log('DOM is loaded');

//   const startMsg = $('<p>Webpack is working!</p>');
//   $('#root').append(startMsg);
// }



// $(main);