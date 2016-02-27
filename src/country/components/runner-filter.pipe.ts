import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'runnerFilter'
})

export class RunnerFilterPipe implements PipeTransform {
    transform(runnersList: any, searchText: string[]): any {
			let filter = searchText.toString().toLowerCase();
			return filter ? runnersList.filter(runner=> {
				//foreach element of runners array, 
				//return if its 'name' or 'city' match searchText
				if (runner.name.toLowerCase().indexOf(filter) !== -1 ||
					runner.city.toLowerCase().indexOf(filter) !== -1)
					return runner;
			}) : runnersList;
    }
}
