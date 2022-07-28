import pg from 'pg';

const poolFundos = new pg.Pool({
    user: "ggwnclzk",
    //password: "onH7AWK1MFIq1iSDxMd7LtR7txBigOqS",
    host: "postgres://ggwnclzk:onH7AWK1MFIq1iSDxMd7LtR7txBigOqS@kesavan.db.elephantsql.com/ggwnclzk",
    database: "ggwnclzk"
});

const poolRegisters = new pg.Pool({
    
});

export { pool };
