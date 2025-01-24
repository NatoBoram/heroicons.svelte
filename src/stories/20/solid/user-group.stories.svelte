<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserGroupSvelte from '../../../lib/20/solid/user-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserGroupSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="UserGroup" />
