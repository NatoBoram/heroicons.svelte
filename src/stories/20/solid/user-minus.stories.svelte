<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserMinusSvelte from '../../../lib/20/solid/user-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserMinusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="UserMinus" />
