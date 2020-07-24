let tasks = this.state.tasks.toString().toLocaleLowerCase();
      if (tasks.includes(newTask.toLowerCase()) === false) {
        console.log(this.state.tasks)
        this.state.tasks.push(newTask)
        console.log(this.state.tasks)
      }else{
        this.setState({exist: 'Yes'})
      }