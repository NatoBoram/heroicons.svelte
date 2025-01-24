<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserPlusSvelte from '../../../lib/24/outline/user-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserPlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="UserPlus" />
