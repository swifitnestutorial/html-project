#include<stdio.h>
typedef struct employee
{
    char name [20];
    int eid;
    float salary;
    
}emp;
void display(emp*ptr);
int main()
{
    emp obj[5];
    int i;
    printf("enter any name, eid and salary \n ");
    for (i=0; i<5; i++)
    {
        scanf("%s%d%f",obj[i].name,&obj[i].eid,&obj[i].salary);
    }
    display(obj);
}
void display(emp*ptr);
{

    int i;
    for (i=0; i<5; i++)
    {
        printf("name=%s eid=%d salary=%f \n" ,(&ptr[i])->name,(&ptr[i])->eid(&ptr[i])->salary);
    }
}