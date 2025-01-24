<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserPlusSvelte from '../../../lib/16/solid/user-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UserPlusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="UserPlus" />
