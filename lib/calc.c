#include <stdio.h>

int main(int argc, char **argv){

  return 0;
}

int add(int a, int b){
  return a + b;
}

int subtract(int a, int b){
  return a - b;
}

int multiple(int a, int b){
  return a * b;
}

int divide(int a, int b){
  if(b == 0){
    return NULL;
  } else {
    return a / b;
  }

}
