import ErrorText from "@/assets/ErrorText";
import ResponseStatus from "@/assets/ResponseStatus";
import firstDigit from "@/store/utils/firstDigit";

function isOk(status: number): boolean {
  let errorText = ErrorText.Stub;

  if (status === ResponseStatus.Ok) {
    return true;
  } else {
    errorText =
      status === ResponseStatus.Unauthorized
        ? ErrorText.InvalidApiKey
        : status === ResponseStatus.NotFound
        ? ErrorText.CityNotFound
        : firstDigit(status) === 4
        ? ErrorText.ClientError
        : firstDigit(status) === 5
        ? ErrorText.ServerError
        : ErrorText.OtherResponse;
  }

  throw new Error(errorText);
}

export default isOk;
