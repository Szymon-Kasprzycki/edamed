$(`.menu-toggle`).click(() => {
    $(`nav`).removeClass(`hidemenu`);
    $(`nav`).addClass(`showmenu`);
    $(`.menu-toggle`).addClass(`hide`);
});

$(`.fa-close`).click(() => {
    $(`nav`).removeClass(`showmenu`);
    $(`nav`).addClass(`hidemenu`);
    $(`.menu-toggle`).removeClass(`hide`);
})

$(`nav a`).click(() => {
    $(`nav`).removeClass(`showmenu`);
    $(`nav`).addClass(`hidemenu`);
    $(`.menu-toggle`).removeClass(`hide`);
})