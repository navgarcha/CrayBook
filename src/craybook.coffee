"use strict"

class ShitCray

    # Dat shit about to get cray
    constructor: (crayDelay = 500) ->
        # Do the replacement functionality
        do @shitCray
    
        # Do periodic replacements, since "Like" and "Unlike" 
        # are updated with AJAX
        setInterval @shitCray, crayDelay

    # Replacement strings
    LIKE_REPLACE: "Dat Shit Cray"
    UNLIKE_REPLACE: "Not So Cray"
    LIKE_THIS_REPLACE: "think this shit is cray"
    LIKES_THIS_REPLACE: "thinks this shit is cray"
  
    # Selectors
    LIKE_TEXT_SELECTOR: [
        ".uiUfiLike .UIImageBlock_Content"                  # Comment box top
    ]
    LIKE_BUTTON_SELECTOR: [
        "button.like_link .default_message"                 # Item like
        "button.cmnt_like_link .default_message"            # Comment like
        "a.likeButton .uiButtonText"                        # Picture like
        "a.buttonLink .like"                                # Theatre picture like
    ]
    SAVING_SELECTOR: [
        "button.like_link .saving_message"                  # Comment like  
        "button.cmnt_like_link .saving_message"             # Picture like
        "a.buttonLink .unlike"                              # Theatre picture like
    ]
 
    # Replace "Like" and "Unlike" text in given element
    replaceLike: (elm, type) ->
        elm.textContent = if type is "like" then @LIKE_REPLACE else @UNLIKE_REPLACE

    # Replace "like this" and "likes this" descriptive text,
    # contained in a text node within this element
    replaceLikeThis: (elm) ->
        elm.textContent = elm.textContent.replace "like this", @LIKE_THIS_REPLACE
        elm.textContent = elm.textContent.replace "likes this", @LIKES_THIS_REPLACE
        
    # Do the replacement functionality
    shitCray: =>
        $likeElms = $ @LIKE_BUTTON_SELECTOR + @SAVING_SELECTOR
        $likeThisElms = $ @LIKE_TEXT_SELECTOR.join()
        
        # Replace "Like" and "Unlike"
        @replaceLike elm, type for elm in $likeElms when /like/i.test(type = elm.textContent.toLowerCase())
    
        # Replace "like this" and "likes this"
        @replaceLikeThis elm for elm in $likeThisElms.contents() when elm.nodeType is 3
    
        return
        
$ -> 
    new ShitCray 200