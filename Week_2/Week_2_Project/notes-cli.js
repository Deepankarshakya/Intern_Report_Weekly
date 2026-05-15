const fs = require("fs");
const readline = require("readline");
class NotesApp {
    constructor() {
        this.file = "notes.json";
        this.notes = this.loadNotes();
    }

    loadNotes() {
        try {
            if (!fs.existsSync(this.file)) return [];
            const data = fs.readFileSync(this.file, "utf-8");
            return JSON.parse(data);
        } catch (err) {
            return [];
        }
    }

    saveNotes() {
        fs.writeFileSync(this.file, JSON.stringify(this.notes, null, 2));
    }

    add(title, content) {
        const note = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toISOString().split("T")[0]
        };
        this.notes.push(note);
        this.saveNotes();
        return note;
    }

    list() {
        return this.notes;
    }

    view(id) {
        return this.notes.find(n => n.id === Number(id));
    }

    edit(id, newTitle, newContent) {
        const note = thhis.notes.find(n => n.id === Number(id));
        if (!note) return null;

        note.title = newTitle || note.title;
        note.content = newContent || note.content;

        this.saveNotes();
        return note;
    }

    delete(id) {
        const index = this.notes.findIndex(n => n.id === Number(id));
        if (index === -1) return false;

        this.notes.splice(index, 1);
        this.saveNotes();
        return true;
    }

    search(keyword) {
        return this.notes.filter(n =>
            n.title.toLowerCase().includes(keyword.toLowerCase()) ||
            n.content.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    sort(type = "date") {
        if (type === "title") {
            return [...this.notes].sort((a, b) => a.title.localeCompare(b.title));
        }
        return [...this.notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
}

const app = new NotesApp();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n=== 📝 Notes CLI ===");
console.log("Type 'help' for commands.\n");

function ask() {
    rl.question("> ", (input) => {
        const [cmd, ...args] = input.split(" ");

        switch (cmd) {

            case "help":
                console.log(`
Commands:
  add
  list
  view <id>
  edit <id>
  delete <id>
  search <keyword>
  exit
                `);
                break;

            case "add":
                rl.question("Title: ", (title) => {
                    rl.question("Content: ", (content) => {
                        const note = app.add(title, content);
                        console.log(`Note saved! (ID: ${note.id})`);
                        ask();
                    });
                });
                return;

            case "list":
                console.table(app.list());
                break;

            case "view":
                const note = app.view(args[0]);
                console.log(note || "Note not found");
                break;

            case "edit":
                rl.question("New Title: ", (title) => {
                    rl.question("New Content: ", (content) => {
                        const updated = app.edit(args[0], title, content);
                        console.log(updated ? "Updated!" : "Not found");
                        ask();
                    });
                });
                return;

            case "delete":
                console.log(app.delete(args[0]) ? "Deleted!" : "Not found");
                break;

            case "search":
                console.table(app.search(args.join(" ")));
                break;

            case "exit":
                console.log("Goodbye!");
                rl.close();
                return;

            default:
                console.log("Unknown command. Type 'help'");
        }

        ask();
    });
}

ask();