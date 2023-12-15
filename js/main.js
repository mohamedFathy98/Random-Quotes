const quotes = [
    {'author': 'Oscar Wilde', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'author': 'خالد الحدي', 
     'quote': ' كيف راه .. كيف رااااه.. كيف شاهده ..كيف مرر له..علمني ان كنت تري كما نري..علمني ان كنت تضع عينا ثالثة '
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.querySelector('#Quote-out').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#Auther-out').textContent = `--${quotes[random].author}`;
    
}