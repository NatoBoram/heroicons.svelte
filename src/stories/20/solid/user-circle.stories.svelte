<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserCircleSvelte from '../../../lib/20/solid/user-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="UserCircle" />
