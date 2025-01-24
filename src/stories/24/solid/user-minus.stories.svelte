<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserMinusSvelte from '../../../lib/24/solid/user-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UserMinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="UserMinus" />
