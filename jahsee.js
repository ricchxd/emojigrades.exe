function aye()
{
    var atzime = window.promt("Enter your grade rating (0-10)");
    var Emoji;

    switch(atzime)
    {
        case "0":
            Emoji = "🤮";
            break;
        case "1":
            Emoji = "🤢";
            break;
        case "2":
            Emoji = "🤒";
            break;
        case "3":
            Emoji = "🤧";
            break;
        case "4":
            Emoji = "🤐";
            break;
        case "5":
            Emoji = "😕";
            break;
        case "6":
            Emoji = "🤔";
            break;
        case "7":
            Emoji = "🙂";
            break;
        case "8":
            Emoji = "😊";
            break;
        case "9":
            Emoji = "😇";
            break;
        case "10":
            Emoji = "🔥🔥🔥";
            break;
        default:
            Emoji = "Wrong input there, hun.";
            break;
    }

    return Emoji;
}