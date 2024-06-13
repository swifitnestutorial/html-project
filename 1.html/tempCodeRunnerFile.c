#include<stdio.h>
void sort(int*ptr);
int main ()
{
    int arr[5];
    int i;
    printf("enter any 5 values \n");
    for (i=0 ;i<5; i++)
    {
        scanf("%d",&arr[i]);

    }
    return 0;
}
void sort(int*ptr)
{
    int i,j,ele;
    for(i=0; i<5; i++);
    {
        printf("enter element \n");
        scanf("%d",&ele);
        for (j=i; j=0; j--)
        {
            if (ptr[j-1]>ele)
            {
                ptr[j]=ptr[j-1];
            }
            else{
                break;
            }
            
        }
        ptr[j]=ele;
    }
}