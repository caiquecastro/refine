import React from "react";
import { RefineCrudShowProps } from "@pankod/refine-ui-types";
import {
    Box,
    BoxProps,
    Card,
    CardProps,
    Group,
    GroupProps,
    ActionIcon,
    Stack,
    Title,
    LoadingOverlay,
} from "@mantine/core";
import {
    ResourceRouterParams,
    useNavigation,
    useResourceWithRoute,
    userFriendlyResourceName,
    useRouterContext,
    useTranslate,
} from "@pankod/refine-core";
import { IconArrowLeft } from "@tabler/icons";

import {
    DeleteButton,
    EditButton,
    ListButton,
    RefreshButton,
} from "@components/buttons";
import { Breadcrumb } from "@components/breadcrumb";

export type ShowProps = RefineCrudShowProps<
    GroupProps,
    GroupProps,
    CardProps,
    GroupProps,
    BoxProps
>;

export const Show: React.FC<ShowProps> = (props) => {
    const {
        children,
        resource: resourceFromProps,
        recordItemId,
        canDelete,
        canEdit,
        dataProviderName,
        isLoading,
        footerButtons: footerButtonsFromProps,
        footerButtonProps,
        headerButtons: headerButtonsFromProps,
        headerButtonProps,
        wrapperProps,
        contentProps,
        headerProps,
        goBack: goBackFromProps,
        breadcrumb = <Breadcrumb />,
        title,
    } = props;
    const translate = useTranslate();

    const { goBack, list } = useNavigation();

    const resourceWithRoute = useResourceWithRoute();

    const { useParams } = useRouterContext();

    const {
        resource: routeResourceName,
        action: routeFromAction,
        id: idFromRoute,
    } = useParams<ResourceRouterParams>();

    const resource = resourceWithRoute(resourceFromProps ?? routeResourceName);

    const isDeleteButtonVisible = canDelete ?? resource.canDelete;

    const isEditButtonVisible = canEdit ?? resource.canEdit;

    const id = recordItemId ?? idFromRoute;

    const loadingOverlayVisible = isLoading ?? false;

    const defaultHeaderButtons = (
        <>
            {!recordItemId && (
                <ListButton
                    {...(isLoading ? { disabled: true } : {})}
                    resourceNameOrRouteName={resource.route}
                />
            )}
            {isEditButtonVisible && (
                <EditButton
                    {...(isLoading ? { disabled: true } : {})}
                    resourceNameOrRouteName={resource.route}
                    recordItemId={id}
                />
            )}
            {isDeleteButtonVisible && (
                <DeleteButton
                    {...(isLoading ? { disabled: true } : {})}
                    resourceNameOrRouteName={resource.route}
                    recordItemId={id}
                    onSuccess={() => list(resource.route ?? resource.name)}
                    dataProviderName={dataProviderName}
                />
            )}
            <RefreshButton
                {...(isLoading ? { disabled: true } : {})}
                resourceNameOrRouteName={resource.route}
                recordItemId={id}
                dataProviderName={dataProviderName}
            />
        </>
    );

    const buttonBack =
        goBackFromProps === (false || null) ? null : (
            <ActionIcon onClick={routeFromAction ? goBack : undefined}>
                {typeof goBackFromProps !== "undefined" ? (
                    goBackFromProps
                ) : (
                    <IconArrowLeft />
                )}
            </ActionIcon>
        );

    const headerButtons = headerButtonsFromProps
        ? typeof headerButtonsFromProps === "function"
            ? headerButtonsFromProps({
                  defaultButtons: defaultHeaderButtons,
              })
            : headerButtonsFromProps
        : defaultHeaderButtons;

    const footerButtons = footerButtonsFromProps
        ? typeof footerButtonsFromProps === "function"
            ? footerButtonsFromProps({ defaultButtons: null })
            : footerButtonsFromProps
        : null;

    return (
        <Card p="md" {...wrapperProps}>
            <LoadingOverlay visible={loadingOverlayVisible} />
            <Group position="apart" align="center" {...headerProps}>
                <Stack spacing="xs">
                    {breadcrumb}
                    <Group spacing="xs">
                        {buttonBack}
                        {title ?? (
                            <Title order={3} transform="capitalize">
                                {translate(
                                    `${resource.name}.titles.show`,
                                    `Show ${userFriendlyResourceName(
                                        resource.label ?? resource.name,
                                        "singular",
                                    )}`,
                                )}
                            </Title>
                        )}
                    </Group>
                </Stack>
                <Group spacing="xs" {...headerButtonProps}>
                    {headerButtons}
                </Group>
            </Group>
            <Box pt="sm" {...contentProps}>
                {children}
            </Box>
            <Group position="right" spacing="xs" mt="md" {...footerButtonProps}>
                {footerButtons}
            </Group>
        </Card>
    );
};
