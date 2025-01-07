

class Punch {
    side int @description(#"
       0 or 1 
    "#)
    power float @description(#"
        0 to 1
    "#)
}

class Kick {
    side int @description(#"
       0 or 1 
    "#)
    power float @description(#"
        0 to 1
    "#)
}

class Defend {
    side int @description(#"
       0 or 1 
    "#)
}


function SimulateFight(input: string) -> (Punch | Kick | Defend)[] {
  client CustomCodeQwen1_5 
  prompt #"
    Given a description of a fighter predict the techniques that the figher will execute in a fight. 
    FIGHTER:
    {{ input }}

    {{ ctx.output_format }}
  "#
}