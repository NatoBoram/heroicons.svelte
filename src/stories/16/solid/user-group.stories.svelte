<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserGroupSvelte from '../../../lib/16/solid/user-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UserGroupSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="UserGroup" />
