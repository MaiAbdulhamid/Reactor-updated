/**
 * Set Page title
 * @param {string} title 
 */

export function title(title){
  document.title = title
}

/**
 * Set Page description
 * @param {string} description 
 */
export function description(description){
  let metaDescriptionTag = document.getElementById('meta-description')
  metaDescriptionTag.content = description
}