<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserGroupSvelte from '../../../lib/24/solid/user-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UserGroupSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserGroup" />
