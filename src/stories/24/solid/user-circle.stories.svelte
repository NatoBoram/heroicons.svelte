<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserCircleSvelte from '../../../lib/24/solid/user-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UserCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="UserCircle" />
