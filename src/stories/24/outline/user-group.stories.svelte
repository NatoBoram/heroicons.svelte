<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserGroupSvelte from '../../../lib/24/outline/user-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserGroupSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="UserGroup" />
