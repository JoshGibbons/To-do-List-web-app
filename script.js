		
		//Globals
		var completedTasks = [];
		var checkBoxIndex = 0;

		function addTask(form){
			//vars
			var taskTextNode = document.createTextNode(form.inputTaskBox.value);
			var list = document.getElementById("taskList");
			var listNode = document.createElement("li");
			var inTextbox = document.getElementById("inputTaskBox")

			//Clear inputTextBox
			inTextbox.value = "";

			//create form object
			var taskForm = document.createElement("input");  	//Form
			var checkBox = document.createElement('input');  	//check box
				checkBox.type = "image";
				checkBox.id = "chckBox" + checkBoxIndex;
				checkBox.src = "images/emptyBox.png";

			var taskFormText = document.createElement("input"); //textbox
				taskFormText.type = "text";
				taskFormText.value = taskTextNode.nodeValue;
				taskFormText.className = "taskFormTextReadOnly";
				taskFormText.readOnly = true;
				
					
			var editBttn = document.createElement("input"); 	//edit button
				editBttn.type = "button";
				editBttn.className = "button_edit";
				editBttn.value = "edit";
			var deleteBttn = document.createElement("input"); //delete button
				deleteBttn.type = "button";
				deleteBttn.className = "button_delete";
				deleteBttn.value = "delete";
			var line = document.createElement("span");
				line.className = "seperatingLine";
			
			//append form to list
			listNode.appendChild(checkBox);	
			listNode.appendChild(taskFormText);
			listNode.appendChild(editBttn);
			listNode.appendChild(line);
			listNode.appendChild(deleteBttn);
			list.appendChild(listNode);


			//button listeners
			checkBox.addEventListener("click", function()
											{checkOffTask(checkBox, taskFormText, listNode); } );
			editBttn.addEventListener("click", function()
											{editTask(listNode, form, taskFormText); } );
			deleteBttn.addEventListener("click", function()
											{deleteTask(list, listNode); } );

			checkBoxIndex++;
			return false;
		}
		
		function checkOffTask(chBox, txtBox, node){
			//if box just got checked
			}
			if(chBox.src == "images/emptyBox.png"){
				
				chBox.src = "images/checked.png";
				txtBox.className += " completed";
				
				//add form to completed-array
				completedTasks.push(node);

			}
			//if box was already checked
			else{

				//completedTasks.pop(form);
				//uncheck box
				//remove strike-through
			}
		}
		function editTask(listNode, form, txtBox){
			txtBox.className = "taskFormTextEditable";
			txtBox.readOnly = false;
			txtBox.focus();

			txtBox.addEventListener("keyup", function(){ checkEnterKey(event, txtBox)});			
		}
		function checkEnterKey(e, txtBox){
			if(e.keyCode === 13){
				switchText(txtBox);
			}
		}
		function switchText(txtBox){
			txtBox.readOnly = true;
			txtBox.style.border = "0px";
			txtBox.className = "taskFormTextReadOnly";
		}
		function deleteTask(list, node){
			list.removeChild(node);
		}
		function deleteChecked(){
			var list = document.getElementById("taskList");

			for(i in completedTasks){
				list.removeChild(completedTasks[i]);
				checkBoxIndex--;
			}
		}
	