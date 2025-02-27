import { Injectable } from '@angular/core';
import { Mistral } from '@mistralai/mistralai';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MistralApiService {

  private client: Mistral
  constructor(
  ) { 
    this.client = new Mistral({apiKey: environment.MISTRAL_API_KEY})
  }

  public async getMistralResponse (question: string) : Promise<string> {
    const chatResponse = await this.client.chat.complete({
      model: 'open-mistral-7b',
      messages: [{role: 'user', content: question}],
    });
    if(chatResponse.choices && chatResponse.choices[0].message.content)
      return chatResponse.choices[0].message.content.toString();
    else
      return "Error addressing the llm, please try again."
  }

}
