function operar()
{
    var mat= new Array()
    for(let i=0;i<10;i++)
    {
        mat[i]= new Array()
        for(let j=0;j<10;j++)
        {
            mat[i][j]= i+" "+j
        }
    }

    for(let ele in mat)
    {
        console.log(mat[ele])
    }

    
}