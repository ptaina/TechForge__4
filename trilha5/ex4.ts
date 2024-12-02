abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {}; 

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {}; 

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
        const sortedResults = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(entry => ({ candidate: entry[0], votes: entry[1] })); 

        return sortedResults;
    }
}


const election = new Election();
election.voteFor("Alana");
election.voteFor("João");
election.voteFor("Maria");
election.voteFor("Ana");

console.log("Resultados da Eleição:");
console.log(election.getResults());

const poll = new Poll();
poll.voteFor("Alana");
poll.voteFor("João");
poll.voteFor("Alana");
poll.voteFor("João");
poll.voteFor("Alana");

console.log("Resultados:");
console.log(poll.getResults());