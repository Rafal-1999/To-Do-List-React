const colors = {
    black: "#000000",
    white: "#FFFFFF",
    gallery: "#EEEEEE",
    codGray1: "#111111",
    codGray2: "#1C1C1C",
    mercury: "#E3E3E3",
    boulder: "#76766D",
    blueLagoon: "#007483",
    cerulean: "#00A7D1",
    elm1: "#1E6F7D",
    elm2: "#1E8896",
    blueStone: "#005A66",
    bondiBlue1: "#0095BA",
    bondiBlue2: "#00A7B6",
    jellyBean: "#237F90",
    orient: "#00627A",
    forestGreen1: "#187A1E",
    forestGreen2: "#1E8923",
    forestGreen3: "#23A528",
    forestGreen4: "#21A62A",
    malachite: "#28D234",
    emerald: "#46DC50",
    crimson: "#D11527",
    redRibbon: "#EC0918",
    sunsetOrange: "#FF4D52",
    amaranth: "#EC4152",
    froly: "#F05F6E",
    mauvelous: "#F08791"
};

const styles = {
    borderRadius: "10px",
    transitionDuration: "0.5s"
};

export const light = {
    ...styles,
    body: {
        color: colors.black,
        background: colors.gallery
    },
    h1: {
        color: colors.black
    },
    h2: {
        color: colors.black
    },
    navigation: {
        color: colors.white,
        background: colors.blueLagoon
    },
    themeToggle: {
        color: colors.blueLagoon,
        background1: colors.white,
        background2: colors.blueLagoon,
        border: colors.mercury
    },
    contentBlock: {
        background: colors.white,
        border: colors.mercury
    },
    filledButton: {
        color: colors.white,
        background: colors.blueLagoon,
        border: colors.elm1,
        hoverBackground: colors.blueStone,
        hoverBorder: colors.elm2,
        activeBackground: colors.bondiBlue2
    },
    unfilledButton: {
        color: colors.blueLagoon,
        hoverColor: colors.blueStone,
        disabledColor: colors.boulder
    },
    actionButtonIcon: {
        color: colors.white
    },
    actionButton1: {
        background: colors.forestGreen1,
        hoverBackground: colors.forestGreen2,
        activeBackground: colors.forestGreen3
    },
    actionButton2: {
        background: colors.crimson,
        hoverBackground: colors.redRibbon,
        activeBackground: colors.sunsetOrange
    },
    formInput: {
        color: colors.black,
        background: colors.white,
        border: colors.mercury
    },
    tasks: {
        color: colors.blueLagoon,
        background: colors.mercury,
        border: colors.mercury,
        hoverColor: colors.blueStone
    },
    tooltip: {
        color: colors.white,
        background: colors.blueLagoon
    },
    footer: {
        color: colors.black,
        background: colors.white,
        border: colors.mercury
    }
};

export const dark = {
    ...styles,
    body: {
        color: colors.white,
        background: colors.codGray1
    },
    h1: {
        color: colors.white
    },
    h2: {
        color: colors.white
    },
    navigation: {
        color: colors.black,
        background: colors.bondiBlue1
    },
    themeToggle: {
        color: colors.blueLagoon,
        background1: colors.black,
        background2: colors.blueLagoon,
        border: colors.codGray2
    },
    contentBlock: {
        background: colors.black,
        border: colors.codGray2
    },
    filledButton: {
        color: colors.black,
        background: colors.bondiBlue1,
        border: colors.elm1,
        hoverBackground: colors.cerulean,
        hoverBorder: colors.jellyBean,
        activeBackground: colors.orient
    },
    unfilledButton: {
        color: colors.bondiBlue1,
        hoverColor: colors.cerulean,
        disabledColor: colors.boulder
    },
    actionButtonIcon: {
        color: colors.black
    },
    actionButton1: {
        background: colors.forestGreen4,
        hoverBackground: colors.malachite,
        activeBackground: colors.emerald
    },
    actionButton2: {
        background: colors.amaranth,
        hoverBackground: colors.froly,
        activeBackground: colors.mauvelous
    },
    formInput: {
        color: colors.white,
        background: colors.black,
        border: colors.codGray2
    },
    tasks: {
        color: colors.bondiBlue1,
        background: colors.codGray2,
        border: colors.codGray2,
        hoverColor: colors.cerulean
    },
    tooltip: {
        color: colors.black,
        background: colors.bondiBlue1
    },
    footer: {
        color: colors.white,
        background: colors.black,
        border: colors.codGray2
    }
};
